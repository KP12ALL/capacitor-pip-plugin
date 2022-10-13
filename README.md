# capacitor-pip-plugin

capacitor picture in pircture plugin

## Install

```bash
npm install capacitor-pip-plugin
npx cap sync
```

## API

<docgen-index>

* [`enable()`](#enable)
* [`disable()`](#disable)
* [`addListener('pipModeChange', ...)`](#addlistenerpipmodechange)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### enable()

```typescript
enable() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### disable()

```typescript
disable() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### addListener('pipModeChange', ...)

```typescript
addListener(eventName: 'pipModeChange', listenerFunc: PipModeChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                    |
| ------------------ | ----------------------------------------------------------------------- |
| **`eventName`**    | <code>'pipModeChange'</code>                                            |
| **`listenerFunc`** | <code><a href="#pipmodechangelistener">PipModeChangeListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### PipState

| Prop                           | Type                 |
| ------------------------------ | -------------------- |
| **`isInPictureInPictureMode`** | <code>boolean</code> |


### Type Aliases


#### PipModeChangeListener

<code>(state: <a href="#pipstate">PipState</a>): void</code>

</docgen-api>
