with import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/24.05.tar.gz") { };

stdenv.mkDerivation {
  name = "decaf-client-javascript";

  buildInputs = with pkgs; [
    nodejs_20

    figlet
    lolcat
  ];

  shellHook = ''
    ## Greet:
    figlet -w 999 -f standard "DECAF JS CLIENT DEV SHELL" | lolcat -S 179
  '';
}
