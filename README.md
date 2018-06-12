Deploy Firebase:
firebase deploy --only functions

Add Path:
~/.bash_profile

Firebase CLI:

When you run npm install -g firebase it tries to install the firebase library and associated binaries into a system-wide location. You can determine where this location is by running npm prefix -g. In order for the firebase binary to be available to your bash session, the bin directory inside your global npm prefix must be on your path.

In Bash, an easy way to add a directory to your PATH is by modifying the .bashrc file in your home directory. Appending a line like so will add the global npm bin directory to your current PATH:

PATH="$(npm prefix -g)/bin:$PATH"

Once you have modified your PATH variable either open a new terminal session or run export PATH="$(npm prefix -g)/bin:$PATH" for the change to immediately take effect.

If ~/.bashrc is not being sourced on your machine, an easy fix is adding the following line to your ~/.bash_profile file:

source "$HOME/.bashrc"
