React Demos
===========

You MUST run these under SimpleHTTPServer or they won't work!

    $ cd react-demo
    $ python -m SimpleHTTPServer

Explanation
-----------

since we're running with `babel-standalone` to translate our JSX
live, Babel makes AJAX requests to get your JSX and convert it. Under Chrome
and Firefox, making AJAX requests does not work with `file://` protocol files.
Running under HTTP makes it work.

If we converted our jsx to js with the command-line (nice but not great for
first-time learners), we wouldn't have this problem (that is, React has no
problem running under `file://`, it's just Babel)

Alternatively, you could start up Chrome with (OSX):

     $ open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files

