package tv.m12all.pip;

import android.app.PictureInPictureParams;
import android.graphics.Rect;
import android.os.Build;

import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Pip")
public class PipPlugin extends Plugin {
    PictureInPictureParams.Builder builder = null;

    @Override
    public void load() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            builder = new PictureInPictureParams.Builder();
            bridge.getWebView().addOnLayoutChangeListener((v, left, top, right, bottom, oldLeft, oldTop, oldRight, oldBottom) -> {
                if (left != oldLeft || right != oldRight || top != oldTop || bottom != oldBottom) {
                    final Rect sourceRectHint = new Rect();
                    bridge.getWebView().getGlobalVisibleRect(sourceRectHint);
                    Logger.debug(getLogTag(), "Changing pip boundaries");
                }
            });
        }
    }

    @PluginMethod
    public void enable(PluginCall call) {
        String message = "PIP not supported";
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.S) {
            bridge.getActivity().setPictureInPictureParams(builder.setAutoEnterEnabled(true).build());
            message = "PIP enabled";
        }
        Logger.debug(getLogTag(), message);
        JSObject ret = new JSObject();
        ret.put("value", message);
        call.resolve(ret);
    }

    @PluginMethod
    public void disable(PluginCall call) {
        String message = "PIP not supported";
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.S) {
            bridge.getActivity().setPictureInPictureParams(builder.setAutoEnterEnabled(false).build());
            message = "PIP disabled";
        }
        Logger.debug(getLogTag(), message);
        JSObject ret = new JSObject();
        ret.put("value", message);
        call.resolve(ret);
    }

    public void onPictureAndPictureModeChange(boolean isInPictureInPictureMode) {
        Logger.debug(getLogTag(), "App is in pip mode " + isInPictureInPictureMode);
        JSObject ret = new JSObject();
        ret.put("isInPictureInPictureMode", isInPictureInPictureMode);
        notifyListeners("pipModeChange", ret, false);
    }
}
