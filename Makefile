.PHONY: activate

SHELL := /bin/bash
NVM_DIR ?= $(HOME)/.nvm
NVM_SCRIPT := $(NVM_DIR)/nvm.sh

activate:
	@test -s "$(NVM_SCRIPT)" || { echo "nvm script not found at $(NVM_SCRIPT). Install nvm or adjust NVM_DIR."; exit 1; }
	@. "$(NVM_SCRIPT)" && \
		nvm use "$$(cat .nvmrc)" && \
		echo "NVM activated with Node.js version: $$(cat .nvmrc)" && \
		node -v