module Data.Void where

  import Data.Functor.Contravariant (Contravariant, (>$<))

  newtype Void = Void Void

  coerce :: forall f a b. (Contravariant f, Functor f) => f a -> f b
  coerce a = absurd <$> (absurd >$< a)

  absurd :: forall a. Void -> a
  absurd a = spin a
    where spin (Void b) = spin b
