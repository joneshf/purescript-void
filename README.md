# Module Documentation

## Module Data.Void

#### `Void`

``` purescript
newtype Void
  = Void Void
```


#### `coerce`

``` purescript
coerce :: forall f a b. (Contravariant f, Functor f) => f a -> f b
```


#### `absurd`

``` purescript
absurd :: forall a. Void -> a
```




