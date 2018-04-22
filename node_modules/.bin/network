#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/../network/bin/network" "$@"
  ret=$?
else 
  node  "$basedir/../network/bin/network" "$@"
  ret=$?
fi
exit $ret
