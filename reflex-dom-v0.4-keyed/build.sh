cd reflex-platform/reflex-dom/reflex-dom
../../work-on ghcjs ./. --command "cabal configure --ghcjs --enable-benchmarks"
../../work-on ghcjs ./. --command "cabal build --ghcjs-options='-dedupe -DGHCJS_BROWSER -O2 -fspecialise-aggressively -DGHCJS_GC_INTERVAL=60000'"
cp -R dist/build/krausest/krausest.jsexe/* ../../../dist
