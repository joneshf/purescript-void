module Data.Void where

  import Prelude
  import Data.Functor.Contravariant (Contravariant, (>$<))

  newtype Void = Void Void

  instance eqVoid :: Eq Void where
    eq _ _ = true

  instance showVoid :: Show Void where
    show _ = "Void"

  coerce :: forall f a b. (Contravariant f, Functor f) => f a -> f b
  coerce a = absurd <$> (absurd >$< a)

  absurd :: forall a. Void -> a
  absurd a = spin a
    where spin (Void b) = spin b
