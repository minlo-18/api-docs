[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Core](../modules/Core.md) / [Core](../modules/Core.Core.md) / IPlayer

# Class: IPlayer

[Core](../modules/Core.md).[Core](../modules/Core.Core.md).IPlayer

**`Author`**

吴思

**`Description`**

玩家的抽象类

**`Network Status`**

usage:双端

## Hierarchy

- [`GameObject`](Core.Core.GameObject.md)

  ↳ **`IPlayer`**

  ↳↳ [`Player`](Gameplay.Gameplay.Player.md)

## Table of contents

### Constructors

- [constructor](Core.Core.IPlayer.md#constructor)

### Accessors

- [forwardVector](Core.Core.IPlayer.md#forwardvector)
- [guid](Core.Core.IPlayer.md#guid)
- [isVisible](Core.Core.IPlayer.md#isvisible)
- [lockState](Core.Core.IPlayer.md#lockstate)
- [name](Core.Core.IPlayer.md#name)
- [netStatus](Core.Core.IPlayer.md#netstatus)
- [parent](Core.Core.IPlayer.md#parent)
- [relativeLocation](Core.Core.IPlayer.md#relativelocation)
- [relativeRotation](Core.Core.IPlayer.md#relativerotation)
- [relativeScale](Core.Core.IPlayer.md#relativescale)
- [rightVector](Core.Core.IPlayer.md#rightvector)
- [staticStatus](Core.Core.IPlayer.md#staticstatus)
- [tag](Core.Core.IPlayer.md#tag)
- [transform](Core.Core.IPlayer.md#transform)
- [upVector](Core.Core.IPlayer.md#upvector)
- [useUpdate](Core.Core.IPlayer.md#useupdate)
- [worldLocation](Core.Core.IPlayer.md#worldlocation)
- [worldRotation](Core.Core.IPlayer.md#worldrotation)
- [worldScale](Core.Core.IPlayer.md#worldscale)

### Methods

- [addDestroyCallback](Core.Core.IPlayer.md#adddestroycallback)
- [asyncGetScriptByName](Core.Core.IPlayer.md#asyncgetscriptbyname)
- [attachToGameObject](Core.Core.IPlayer.md#attachtogameobject)
- [clone](Core.Core.IPlayer.md#clone)
- [deleteDestroyCallback](Core.Core.IPlayer.md#deletedestroycallback)
- [destroy](Core.Core.IPlayer.md#destroy)
- [detachFromGameObject](Core.Core.IPlayer.md#detachfromgameobject)
- [getBoundingBoxSize](Core.Core.IPlayer.md#getboundingboxsize)
- [getBounds](Core.Core.IPlayer.md#getbounds)
- [getChildByGuid](Core.Core.IPlayer.md#getchildbyguid)
- [getChildByName](Core.Core.IPlayer.md#getchildbyname)
- [getChildren](Core.Core.IPlayer.md#getchildren)
- [getChildrenBoxCenter](Core.Core.IPlayer.md#getchildrenboxcenter)
- [getCollision](Core.Core.IPlayer.md#getcollision)
- [getForwardVector](Core.Core.IPlayer.md#getforwardvector)
- [getPlayerID](Core.Core.IPlayer.md#getplayerid)
- [getRelativeLocation](Core.Core.IPlayer.md#getrelativelocation)
- [getRelativeRotation](Core.Core.IPlayer.md#getrelativerotation)
- [getRelativeScale](Core.Core.IPlayer.md#getrelativescale)
- [getRightVector](Core.Core.IPlayer.md#getrightvector)
- [getScriptByGuid](Core.Core.IPlayer.md#getscriptbyguid)
- [getScriptByName](Core.Core.IPlayer.md#getscriptbyname)
- [getScripts](Core.Core.IPlayer.md#getscripts)
- [getSourceAssetGuid](Core.Core.IPlayer.md#getsourceassetguid)
- [getTransform](Core.Core.IPlayer.md#gettransform)
- [getUpVector](Core.Core.IPlayer.md#getupvector)
- [getWorldLocation](Core.Core.IPlayer.md#getworldlocation)
- [getWorldRotation](Core.Core.IPlayer.md#getworldrotation)
- [getWorldScale](Core.Core.IPlayer.md#getworldscale)
- [isRunningClient](Core.Core.IPlayer.md#isrunningclient)
- [onDestroy](Core.Core.IPlayer.md#ondestroy)
- [onStart](Core.Core.IPlayer.md#onstart)
- [onUpdate](Core.Core.IPlayer.md#onupdate)
- [ready](Core.Core.IPlayer.md#ready)
- [setCollision](Core.Core.IPlayer.md#setcollision)
- [setLocationAndRotation](Core.Core.IPlayer.md#setlocationandrotation)
- [setRelativeLocation](Core.Core.IPlayer.md#setrelativelocation)
- [setRelativeRotation](Core.Core.IPlayer.md#setrelativerotation)
- [setRelativeScale](Core.Core.IPlayer.md#setrelativescale)
- [setTransform](Core.Core.IPlayer.md#settransform)
- [setVisibility](Core.Core.IPlayer.md#setvisibility)
- [setWorldLocation](Core.Core.IPlayer.md#setworldlocation)
- [setWorldRotation](Core.Core.IPlayer.md#setworldrotation)
- [setWorldScale](Core.Core.IPlayer.md#setworldscale)
- [asyncFind](Core.Core.IPlayer.md#asyncfind)
- [asyncSpawnGameObject](Core.Core.IPlayer.md#asyncspawngameobject)
- [find](Core.Core.IPlayer.md#find)
- [findGameObjectByTag](Core.Core.IPlayer.md#findgameobjectbytag)
- [getGameObjectByName](Core.Core.IPlayer.md#getgameobjectbyname)
- [getGameObjectsByName](Core.Core.IPlayer.md#getgameobjectsbyname)
- [spawnGameObject](Core.Core.IPlayer.md#spawngameobject)

## Constructors

### constructor

• **new IPlayer**()

#### Inherited from

[GameObject](Core.Core.GameObject.md).[constructor](Core.Core.GameObject.md#constructor)

## Accessors

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

GameObject.forwardVector

#### Defined in

Core/index.d.ts:405

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

GameObject.guid

#### Defined in

Core/index.d.ts:38

---

### isVisible

• `get` **isVisible**(): `boolean`

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

GameObject.isVisible

#### Defined in

Core/index.d.ts:496

---

### lockState

• `get` **lockState**(): `boolean`

**`Description`**

获取是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

GameObject.lockState

#### Defined in

Core/index.d.ts:452

• `set` **lockState**(`v`): `void`

**`Description`**

设置是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

GameObject.lockState

#### Defined in

Core/index.d.ts:447

---

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

#### Inherited from

GameObject.name

#### Defined in

Core/index.d.ts:167

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description          |
| :----- | :------- | :------------------- |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

GameObject.name

#### Defined in

Core/index.d.ts:173

---

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

#### Inherited from

GameObject.netStatus

#### Defined in

Core/index.d.ts:502

---

### parent

• `get` **parent**(): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)

父物体

#### Inherited from

GameObject.parent

#### Defined in

Core/index.d.ts:458

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                    |
| :---------- | :-------------------------------------- |
| `newParent` | [`GameObject`](Core.Core.GameObject.md) |

#### Returns

`void`

#### Inherited from

GameObject.parent

#### Defined in

Core/index.d.ts:463

---

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

GameObject.relativeLocation

#### Defined in

Core/index.d.ts:304

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

GameObject.relativeLocation

#### Defined in

Core/index.d.ts:310

---

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

GameObject.relativeRotation

#### Defined in

Core/index.d.ts:330

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

GameObject.relativeRotation

#### Defined in

Core/index.d.ts:336

---

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

GameObject.relativeScale

#### Defined in

Core/index.d.ts:356

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放  |

#### Returns

`void`

#### Inherited from

GameObject.relativeScale

#### Defined in

Core/index.d.ts:362

---

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

GameObject.rightVector

#### Defined in

Core/index.d.ts:419

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

GameObject.staticStatus

#### Defined in

Core/index.d.ts:442

---

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的 Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

#### Inherited from

GameObject.tag

#### Defined in

Core/index.d.ts:185

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | usage:Tag   |

#### Returns

`void`

#### Inherited from

GameObject.tag

#### Defined in

Core/index.d.ts:179

---

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Inherited from

GameObject.transform

#### Defined in

Core/index.d.ts:205

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description              |
| :---------- | :------------------------------------ | :----------------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的 transform |

#### Returns

`void`

#### Inherited from

GameObject.transform

#### Defined in

Core/index.d.ts:211

---

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

GameObject.upVector

#### Defined in

Core/index.d.ts:392

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

GameObject.useUpdate

#### Defined in

Core/index.d.ts:437

• `set` **useUpdate**(`v`): `void`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

GameObject.useUpdate

#### Defined in

Core/index.d.ts:432

---

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

GameObject.worldLocation

#### Defined in

Core/index.d.ts:230

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

GameObject.worldLocation

#### Defined in

Core/index.d.ts:235

---

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Inherited from

GameObject.worldRotation

#### Defined in

Core/index.d.ts:254

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

GameObject.worldRotation

#### Defined in

Core/index.d.ts:260

---

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

GameObject.worldScale

#### Defined in

Core/index.d.ts:279

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

GameObject.worldScale

#### Defined in

Core/index.d.ts:284

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[addDestroyCallback](Core.Core.GameObject.md#adddestroycallback)

#### Defined in

Core/index.d.ts:616

---

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Promise`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncGetScriptByName](Core.Core.GameObject.md#asyncgetscriptbyname)

#### Defined in

Core/index.d.ts:563

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                                    | Description |
| :---- | :-------------------------------------- | :---------- |
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage:物体  |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[attachToGameObject](Core.Core.GameObject.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

---

### clone

▸ **clone**(`inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

克隆的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[clone](Core.Core.GameObject.md#clone)

#### Defined in

Core/index.d.ts:543

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[deleteDestroyCallback](Core.Core.GameObject.md#deletedestroycallback)

#### Defined in

Core/index.d.ts:622

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[destroy](Core.Core.GameObject.md#destroy)

#### Defined in

Core/index.d.ts:146

---

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[detachFromGameObject](Core.Core.GameObject.md#detachfromgameobject)

#### Defined in

Core/index.d.ts:588

---

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name                      | Type                            | Description                                        |
| :------------------------ | :------------------------------ | :------------------------------------------------- |
| `nonColliding?`           | `boolean`                       | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | usage:如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBoundingBoxSize](Core.Core.GameObject.md#getboundingboxsize)

#### Defined in

Core/index.d.ts:598

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 Gameobject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 Gameobject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 Gameobject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBounds](Core.Core.GameObject.md#getbounds)

#### Defined in

Core/index.d.ts:194

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByGuid](Core.Core.GameObject.md#getchildbyguid)

#### Defined in

Core/index.d.ts:536

---

### getChildByName

▸ **getChildByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名称  |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByName](Core.Core.GameObject.md#getchildbyname)

#### Defined in

Core/index.d.ts:529

---

### getChildren

▸ **getChildren**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取 Children 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array\<GameObject\>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildren](Core.Core.GameObject.md#getchildren)

#### Defined in

Core/index.d.ts:522

---

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildrenBoxCenter](Core.Core.GameObject.md#getchildrenboxcenter)

#### Defined in

Core/index.d.ts:610

---

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getCollision](Core.Core.GameObject.md#getcollision)

#### Defined in

Core/index.d.ts:480

---

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getForwardVector](Core.Core.GameObject.md#getforwardvector)

#### Defined in

Core/index.d.ts:413

---

### getPlayerID

▸ `Abstract` **getPlayerID**(): `number`

**`Description`**

获取玩家 Id

**`Effect`**

调用端生效

#### Returns

`number`

玩家 Id

#### Defined in

Core/index.d.ts:643

---

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeLocation](Core.Core.GameObject.md#getrelativelocation)

#### Defined in

Core/index.d.ts:318

---

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeRotation](Core.Core.GameObject.md#getrelativerotation)

#### Defined in

Core/index.d.ts:344

---

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeScale](Core.Core.GameObject.md#getrelativescale)

#### Defined in

Core/index.d.ts:370

---

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRightVector](Core.Core.GameObject.md#getrightvector)

#### Defined in

Core/index.d.ts:427

---

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByGuid](Core.Core.GameObject.md#getscriptbyguid)

#### Defined in

Core/index.d.ts:570

---

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByName](Core.Core.GameObject.md#getscriptbyname)

#### Defined in

Core/index.d.ts:556

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScripts](Core.Core.GameObject.md#getscripts)

#### Defined in

Core/index.d.ts:549

---

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的 GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的 GUID

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getSourceAssetGuid](Core.Core.GameObject.md#getsourceassetguid)

#### Defined in

Core/index.d.ts:628

---

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                  | Description                                      |
| :------- | :------------------------------------ | :----------------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getTransform](Core.Core.GameObject.md#gettransform)

#### Defined in

Core/index.d.ts:219

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getUpVector](Core.Core.GameObject.md#getupvector)

#### Defined in

Core/index.d.ts:399

---

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldLocation](Core.Core.GameObject.md#getworldlocation)

#### Defined in

Core/index.d.ts:243

---

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldRotation](Core.Core.GameObject.md#getworldrotation)

#### Defined in

Core/index.d.ts:268

---

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldScale](Core.Core.GameObject.md#getworldscale)

#### Defined in

Core/index.d.ts:292

---

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true 为客户端

#### Inherited from

[GameObject](Core.Core.GameObject.md).[isRunningClient](Core.Core.GameObject.md#isrunningclient)

#### Defined in

Core/index.d.ts:49

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onDestroy](Core.Core.GameObject.md#ondestroy)

#### Defined in

Core/index.d.ts:17

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onStart](Core.Core.GameObject.md#onstart)

#### Defined in

Core/index.d.ts:12

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description                  |
| :--- | :------- | :--------------------------- |
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onUpdate](Core.Core.GameObject.md#onupdate)

#### Defined in

Core/index.d.ts:23

---

### ready

▸ **ready**(): `Promise`

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`

准备好的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[ready](Core.Core.GameObject.md#ready)

#### Defined in

Core/index.d.ts:122

---

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name                   | Type                                                                                                                   | Description                                                      |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | usage: 是否传递给子节点 default: false                           |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setCollision](Core.Core.GameObject.md#setcollision)

#### Defined in

Core/index.d.ts:471

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description    |
| :--------- | :---------------------------------- | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setLocationAndRotation](Core.Core.GameObject.md#setlocationandrotation)

#### Defined in

Core/index.d.ts:383

---

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeLocation](Core.Core.GameObject.md#setrelativelocation)

#### Defined in

Core/index.d.ts:324

---

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeRotation](Core.Core.GameObject.md#setrelativerotation)

#### Defined in

Core/index.d.ts:350

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description            |
| :------ | :------------------------------ | :--------------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeScale](Core.Core.GameObject.md#setrelativescale)

#### Defined in

Core/index.d.ts:376

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description     |
| :---------- | :------------------------------------ | :-------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setTransform](Core.Core.GameObject.md#settransform)

#### Defined in

Core/index.d.ts:225

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置 GameObject 是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                         |
| :--------------------- | :------------------------------------------------------- | :---------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态                          |
| `propagateToChildren?` | `boolean`                                                | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setVisibility](Core.Core.GameObject.md#setvisibility)

#### Defined in

Core/index.d.ts:487

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description             |
| :--- | :------------------------------ | :---------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldLocation](Core.Core.GameObject.md#setworldlocation)

#### Defined in

Core/index.d.ts:249

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldRotation](Core.Core.GameObject.md#setworldrotation)

#### Defined in

Core/index.d.ts:274

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description            |
| :--- | :------------------------------ | :--------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldScale](Core.Core.GameObject.md#setworldscale)

#### Defined in

Core/index.d.ts:298

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`

**`Description`**

通过 guid 异步查找 Gamobject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`

Guid 对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncFind](Core.Core.GameObject.md#asyncfind)

#### Defined in

Core/index.d.ts:161

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`

构造的 GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncSpawnGameObject](Core.Core.GameObject.md#asyncspawngameobject)

#### Defined in

Core/index.d.ts:138

---

### find

▸ `Static` **find**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过 Guid 查找 Gameobject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

Guid 对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[find](Core.Core.GameObject.md#find)

#### Defined in

Core/index.d.ts:153

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array

#### Inherited from

[GameObject](Core.Core.GameObject.md).[findGameObjectByTag](Core.Core.GameObject.md#findgameobjectbytag)

#### Defined in

Core/index.d.ts:577

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectByName](Core.Core.GameObject.md#getgameobjectbyname)

#### Defined in

Core/index.d.ts:516

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

返回所有查找到的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectsByName](Core.Core.GameObject.md#getgameobjectsbyname)

#### Defined in

Core/index.d.ts:509

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

构造的 GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[spawnGameObject](Core.Core.GameObject.md#spawngameobject)

#### Defined in

Core/index.d.ts:130