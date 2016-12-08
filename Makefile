BIN=./node_modules/.bin
WATCHIFY=$(BIN)/watchify
BROWSERIFY=$(BIN)/browserify

REQUIRE_VENDORS=-r react -r react-dom -r redux
EXCLUDE_MODULES=-x react -x react-dom -x redux
ENTRY=src/client.js
OUTPUT=static/bundle.js

watch:
	$(WATCHIFY) -d $(EXCLUDE_MODULES) $(ENTRY) -o $(OUTPUT)

watch-raw:
	$(WATCHIFY) $(EXCLUDE_MODULES) $(ENTRY) -o $(OUTPUT)

serve:
	node src/server

bundle:
	$(BROWSERIFY) -d $(EXCLUDE_MODULES) $(ENTRY) -o $(OUTPUT)

bundle-raw:
	$(BROWSERIFY) $(EXCLUDE_MODULES) $(ENTRY) -o $(OUTPUT)

vendor:
	$(BROWSERIFY) -d $(REQUIRE_VENDORS) -o static/vendor.js

vendor-raw:
	$(BROWSERIFY) $(REQUIRE_VENDORS) -o static/vendor.js
