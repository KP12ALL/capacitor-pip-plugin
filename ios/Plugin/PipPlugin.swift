import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PipPlugin)
public class PipPlugin: CAPPlugin {
    @objc func enable(_ call: CAPPluginCall) {
        call.resolve(["value": "Not implemented"])
    }

     @objc func disable(_ call: CAPPluginCall) {
        call.resolve(["value": "Not implemented"])
    }
}
