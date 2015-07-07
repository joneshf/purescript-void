## Module Data.Void

#### `Void`

``` purescript
newtype Void
  = Void Void
```

##### Instances
``` purescript
instance eqVoid :: Eq Void
instance showVoid :: Show Void
```

#### `coerce`

``` purescript
coerce :: forall f a b. (Contravariant f, Functor f) => f a -> f b
```

#### `absurd`

``` purescript
absurd :: forall a. Void -> a
```


