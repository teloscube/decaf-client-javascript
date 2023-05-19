with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "decaf-client-javascript-shell";
  buildInputs = with pkgs; [
    nodejs
    yarn
  ];
}
