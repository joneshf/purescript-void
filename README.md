# Module Documentation

## Module Data.Void

### Types


    newtype Void where
      Void :: Void -> Void


### Values


    absurd :: forall a. Void -> a


    coerce :: forall f a b. (Contravariant f, Functor f) => f a -> f b



