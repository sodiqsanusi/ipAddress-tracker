# Fuck, it worked. But wrongly.

So this time, the UI rendered as aspected, with all the data gotten server-side. But the fact that it was getting this data from the server meant that it was providing the IP Address of the server not the client. This was a huge pain for me as that bug became clear only when I tested the app after production as it didn't show during development.

Will change the data rendering method on another branch along with loading states leaving this as an example of when not to do server-side rendering.
