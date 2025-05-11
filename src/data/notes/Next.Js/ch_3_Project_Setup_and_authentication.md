    
    10:51
    you everything I know about next GS in this crash course to get started create a new empty folder on your desktop and open up your terminal once you're there run MPX create-- apppp add latest and press enter after that press y to install the installer and you'll be prompted to answer a couple of questions for the project name just type do slash because we're already in the folder within which we want to create our nygs app in this case say yes for typescript yes for eslint yes for tailin CSS in this case

    
    11:27
    we don't need a source directory we definitely will be using the app router with its latest functionalities as well as the turbo pack which runs your application more smoothly we don't need to customize the import Alias the default one is fine and that's it your application will soon get initialized with all of the dependencies needed to run it there we go that was a success now that your project is set up and ready to go you'll notice many fs and folders so let me walk you through them from bottom to top the first one on our

    
    11:58
    list is TS config f.j Json this is the configuration file for typescript it defines what should be type checked ignored and the rules to follow next we have a Tailwind doc config.txt Tailwind by customizing colors sizes Shadows plugins or anything else you might need you know about read me right it's a simple marked done file that explains how to run the project next we have a post CSS config MJS it's a configuration file for post CSS a tool used to process CSS with different plugins in this case it uses tailin CSS

    
    12:37
    as a plugin which allows you to use utility first classes in your project package lock Json is a file that locks the version of dependencies and their subpena same versions package Jon is a bit simpler and it contains all the current dependencies and scripts there's a Dev script which starts nextjs in development mode with hot module reloading error reporting and more build creates an optimized production build of your app starts simply starts next GS in production mode and there's also lint which runs es lint for all files in the

    
    13:14
    source app directory and more finally you can also see three very important dependencies react react Dom and the current version of next by the time you're watching this video you should just be able to see 15 right here after after package Jon we have a next env. D.S which is a typescript declaration file for nextjs and as it says right here this file should not be edited it's specifically for nextjs on the other hand next. config.sys features such as experimental options image settings build settings

    
    13:52
    and more and you all know the good old get ignore it's very important not to miss adding something there thankfully next JS adds the EnV for us that's good no more leaked environment variables after that we have a lint rc. Json allowing you to configure your linting options then we dive into folders first we have a public folder which contains static assets always put your images and other static data here and then of course there's the node modules the heaviest object in the universe Jokes Aside it is a folder containing all the

    
    14:27
    dependencies or packages needed to run your application and finally there's the app folder the most important folder in every nextjs application in the app folder of course we have our primary homepage page. DSX but before we check out the rest of these pages in detail let's first run our application to see it in the browser I'll open up the terminal and press mpm run Dev this will run it on Local Host 3000 so open it up there we go nextjs get started by editing app page. DSX save and see your changes instantly well

    
    15:06
    this is the new version of the boilerplate page I like it you'll also notice something at the bottom left I'll tell you what that is later on but for now the page you've just seen is right here within page. DSX this file represents the homepage or the forward SL route of your site by default it contains some boilerplate code so let's remove it and return a single H1 that says welcome to next.js we can also give it a class name of text- 3XL if I save it and go back to the browser you'll see the changes instantly thanks to HMR hot

    
    15:44
    module replacement among the other folders that we have here the first one are fonts and this is where you can store your font files it's actually preferable to using something like Google fonts think of it as self-hosting your own fonts there's a favicon Ico it's a file that appears on your browser's tab then there's the global. CSS file where you can write all of your custom CSS or simply import tailin CSS after that we have a layout. DSX this is the main entry point for your application anything you do here will be

    
    16:17
    applied across all pages and routes that's why here we're importing the fonts the Styles and the metadata for example let's change the metadata from create next app to something like hello nextjs I've even added a waving emoji and even without reloading you can see the changes in your browser and I know many of you will wonder what kind of browser is this I'm using Arc you can check it out I like it quite a lot and finally we're getting back to the page. TSX where we initially made those changes that's it that's the most

    
    16:50
    important folder of your app and all of the changes that you make to your app will go inside of this app folder okay okay now that you're familiar with the entire nextjs application structure let's get our hands dirty at the start of the crash course I was telling you a bit about architecture where you can write two different types of components client and server components if you remember I said that every component you create nextjs will by default turn into a server component but is that really

    
    17:20
    the case here on the homepage we have a component saying welcome to nextjs let's add a conso log before the return statement consol log what am I I was about to start what am I server or client component but it looks like our AI autocomplete is having a bit of an existential crisis it's saying what am I doing here but yeah I'll just add server or client let's see which type of component is this by default we have absolutely nothing here just export default function home where we have a consol log and an H1 statement where do

    
    17:56
    you think this consol log will appear do you think will be able to see this conso log in the browser well up to this point I would tell you no it's not going to appear in your browser because this is a serverside component but would you look at this xgs steam knew that some of us might be searching for this cons log in the browser so even though technically it shouldn't be showing here they're still showing it to us but they have added this server tag at the top left so we know it's actually rendering from the

    
    18:24
    server pretty cool nextjs but if you actually knew what you were doing you would IM immediately go to the terminal to find your console log and here it is so now we know that this is actually rendering on the server server components are rendered on the server so this brings me to the topic of react server components they're the components that are rendered on the server and their HTML output is then sent to the client since they're rendered in the server they can access serverside resources directly like databases or

    
    18:55
    defile system this helps reduce the amount of JavaScript sent to the client improving performance server components are excellent when you need direct access to serers side resources like accessing files in a file system or you want to keep sensitive information well sensitive such as access tokens and other Keys safe on the server all right but if server components really are better why can't everything be a server component well if your component requires browser interactivity such as clicking buttons navigating to different

    
    19:31
    pages and submitting forms then you need to turn it into a client component so what are react client components client components are of course rendered on the client side and in this case client side simply means the browser to use them in nextjs you must add a use client directive at the top of the component in our case let's do that by creating a new folder within the app folder and call it components and within it create a new file called hello. DSX right at the top you can add that use client directive that I was telling

    
    20:08
    you about and then you can simply create a new functional component called hello that simply returns a div with an H1 that says hello and I've also added a console log saying I am a clan component see this one doesn't have an existential crisis it knows what it is now that you've created it let's go back to the page. TSX let's wrap this H1 within a react fragment allowing us to add another adjacent element in this case we'll simply import the hello component coming from at SLA SL components SLO now let's

    
    20:47
    check the terminal okay we don't see that conso log there but that makes sense right because hello knows it's a client component but if we go into the browser there we go I am I am a client component coming from hello. DSX but wait I think I initially missed it but now I see it I am a client component is so confident that it appears right here too but why or how is that happening well this is because server components are rendered only on the server side while client components are pre-rendered

    
    21:21
    on the server side to create a static shell and then hydrate it on the client side this means that everything within the the client component that doesn't require interactivity or isn't dependent on the browser is still rendered on the server the code or parts that rely on the browser or require interactivity are left as placeholders during server side pre-rendering when they reach the client the browser then renders the client components and fills in the placeholders left by the server I hope that makes

    
    21:53
    sense and that answers the question of what is serers side pre-rendering a pretty cool feature by nextjs I hope that's clear now but if you're still unsure take a second to pause it and rewatch it until it clicks you can also add some additional cons logs or components and then render them within the page. DSX don't proceed further if that doesn't make sense and for a deeper dive with clearer explanations and more visuals I would recommend checking out the ultimate nextjs course where I break down the entire client server

    
    22:26
    architecture in detail so finally when should you allow nextjs to turn your components into server side components and when should you manually change them to client side well A good rule of thumb is to leave it as server side component until you need some browser interactivity at which point you'll most likely get an error and then you can add the use client directive at the top but if you want to understand on a deeper level when should you use each one always refer to this table within the nextjs docs I'll make sure to link it as

    
    22:57
    an essential resource within the ebook that you can download this is the best table that simply explains when you need something to be a server or a client component depending on what you need that component to do now it's time to dive into routing nextjs uses a file based routing system and doing everything on a single page is boring right currently we only have one route which is the homepage so how do we create a new route like forward slab it is as simple as creating a new folder and a file

    
    23:29
    in the app directory create a new folder and name it about and within that folder create a new page. TSX file within there you can create a single functional component that returns a div that says about now go back to the browser and simply add for slab to your URL and if I zoom it in a lot there we go the route is being displayed this is how you create routes in xgs it uses an intuitive file-based routing system where folders are used to define routes the folder name becomes the route name and the page that the aect inside of it

    
    24:11
    becomes a file that gets rendered for that route it's a special file naming convention for displaying that route's content but in most cases that won't be enough you'll need nested routes let's say you're developing an admin dashboard within this application and you want to create a Route 4 dashboard users and dashboard analytics of course you can't create two folders with the same name this is where nested routes come in handy let's create a new folder called dashboard inside of which we'll create

    
    24:43
    two additional folders one will be called users and another one will be called analytics and both of them will contain a special page. DSX file there we go you get one and you get one too within them we can simply run our afce if you don't have that Quick Command you can install it as a package it's called react Snippets and then within this one we can call it users we can duplicate that and we can also add it within analytics and if you go back to your browser go to forward SL dashboard slash users you can see users

    
    25:23
    and if you go to/ analytics you can see analytics but of course if you go just to dashboard itself it's going to be a 404 here's a quick question for you do you know how you would create a separate dashboard homepage if you wanted to the answer is simply add another page. DSX within the dashboard folder itself yes you can have a dashboard page and then dashboard nested routes but this still may not be enough in many cases you'll also need Dynamic routes what if you want to display each user's profile in

    
    25:58
    the dashboard let's say we have four predefined users in the dashboard users page that's going to look something like this users with in div and then we have an H1 and a UL with four different users now let's say you want to show full user details on the page when you click on each one of these users say we want to direct them to dashboard users user one and then dashboard users user 2 and so on we can't create these folders manually as we don't know how many users will there be this is what dynamic

    
    26:33
    routing is all about a route where part of the URL can change or be dynamic typically based on the user input or specific data in the database creating Dynamic routes in nextjs is simple all you have to do is wrap the part that changes that is dynamic in square brackets in our case it'll be the user ID so let's create a new folder called ID within the users folder and make sure to wrap it within square brackets that's the rule inside of that file create a new page. TSX and run RFC to create a generic user Details

    
    27:16
    page now let's go back to the users page and let's make these users clickable doing that is pretty simple we just have to use NEX gs's link component it looks like this you import it from next SL link you give it an hre to where you want to go and in this case let's make it point to dashboard slash users slash1 and let's say user one we can of course duplicate this a few more times so let's put it within an Li and properly close it and 1 2 3 there we go and we can also change their name GES 2 3 4 now if I go

    
    28:01
    back to the browser I can actually click on these links and look they let me to the user Details page but they all do right three four they're all relating to the same user Details page or the page is technically different because right here you can see it says users one and if you go to users 2 it's going to say users 2 but how do we extract the different information about each one of the the users let me show you I'll go back to user Details page and we can extract this Dynamic parameter from the

    
    28:36
    folder from the params object you destructure right here at the top of the function and then you say params since we're using typescript we also need to define the type of the params it'll be an object containing a single ID which will be of a type string and how do I know that it will contain a single property called ID of a typ string well that's because we called this Dynamic route ID by saying ID within square brackets if you said something like name here you would be able to extract it by saying something like name in this case

    
    29:11
    let's destructure the ID from pams by saying const ID is equal to pams or you can also use the dot notation saying pam. ID finally now we can say user profile and then we can show the actual ID let's actually turn this into H1 and give it a class name of text- 3XL so we can see it better now if you go back you can see user profile 2 user profile 3 4 and so on and in real life this would work exactly the same you will always be fetching just the user ID but then from that page you can make a call to the

    
    29:52
    database that'll give you all the other user information such as their Avatar full name username and more more so now you know what prams are and if you want to get access to this information such as this ID elsewhere and not within an xgs page you can use a client component hook called use params that lets you read routes Dynamic parameters filled in by the current URL next let's learn about layout earlier I told you that the layout. TSX file is the main starting point of our app to demonstrate this let

    
    30:25
    me add a text of root before run in the children I'll do that right here and once again I'll make it H1 with a class name of text- 3XL and I'll say root now if you check out the homepage it'll say root welcome to nextjs then if you go to slab you'll see root about or if you go to dashboard SL users if it doesn't appear automatically for you you might need to reload your server by opening up the ter Al pressing contrl C to stop it and then rerunning mpm runev but you get the point rout appears on

    
    31:06
    top of all the pages this is because layout. TSX acts as the parent for all of these routes it allows you to share UI elements across multiple Pages for example you can place features like a navbar or a footer in the layout and they'll appear on all children routes saving you you from having to import them on every page simply add them once in layout. TSX and they'll be available wherever needed in nextjs a root layout is always required but you can create additional layouts if necessary let's say you want to render a

    
    31:46
    specific UI just for the dashboard routes we can do that by adding another layout. TSX right here within the dashboard the name has to be layout don't try something else otherwise nextjs won't recognize it creating a new layout is as simple as creating a new functional component and then getting children right here just to make typescript happy you can also Define additional types such as children is equal to react node and you might need to import react there we go now everybody's happy within this div we can then render

    
    32:24
    children and the children in this case will be all other pages that you showing within this layout but if you want to add some kind of a special dashboard nav bar so let's say dashboard then you can add it to the layout and let's also apply the same styles by giving it a class name equal to text- 3XL so now if you reload you can see root this is coming from the root layout and then dashboard is coming from the dashboard layout just imagine that these are different pieces of the UI that we're showing on different screens so

    
    32:57
    dashboard users and dashboard analytics has both root and dashboard but as soon as you exit the dashboard route group you're back to just rout I hope this makes sense but there's more route groups let's say you don't want the rot layout to appear in the dashboard routes and only show up in non dashboard routes like home about and more this means that you'd need a separate nav bar for the dashboard and another one for the non- dashboard routes that's pretty similar how things work in real life right in

    
    33:31
    such scenarios you can use route groups they allow you to organize your route segments and project structure without impacting the URL path this means that you can create folders but unlike nested routes they won't show up in the URL you do that by wrapping the folder name inside parentheses in our case let's create two different folders one will be called dashboard in parentheses and the other one will be called root in parenthesis as well now move the dashboard folder within the dashboard in parenthesis and move the

    
    34:09
    homepage and the about folder in the root now remove the root from the root layout file this let's say this is a root navigation bar and add another layout. TSX file within the root route group once again it is a single functional component that accepts children and then now you can render the nav bar right here so let's do an H1 and this case let's give it a class name equal to text- 3XL and let's simply say navbar and you must render children in every layout file so let's render them below and one last change is to move the

    
    34:49
    layout. TSX from this dashboard folder to this dashboard folder right here now each route group has its own layout now if you go back to the website you'll see everything is as it was we have nav bar on top of the home and slout Route and if we go to dashboard and then users you can see that we have only a dashboard navigation bar everything works as expected so why are we using these route groups in the first place well take a look they're making our code more organized without affecting the URL

    
    35:28
    to go to the homepage or to the about page you don't have to say forward SL root forward slab you simply say about so whenever you place a folder name within parenthesis that means you're creating a route group and it will not be map to a URL path and why is this useful well one for organizing your code you can see everything is cleaner now and the second reason is that you can have separate layouts for different route groups which are going to give you different UI but without affecting the URL so let's rewind one more time route

    
    36:04
    groups allow you to create folders without affecting the URL and even though creating route groups isn't taken into account you can still create files like layout. DSX inside of them and it's important that this Ru route group still points to the homepage so this page right here is the primary homepage if you were to copy and paste this file into the dashboard that would work because now we have two parallel routes that resolve to the same path I hope this is clear understanding route groups is extremely useful because they allow

    
    36:38
    you to separate concerns manage route segments and render content properly all without showing them in the URL next let's talk about airor handling in nextjs there's a special file called error. JS or TS if you're using typescript that catches errors and and displays them on the UI similar to how we were able to create multiple layout files for each folder be that a route group or a route folder we can do the same for the error. TS file let's throw an error on purpose in the about page I'll head over to that page and I'll say

    
    37:16
    Throw new error I'll say something like not implemented and don't forget to delete this duplicate of a p TSX within the dashboard that one is still throwing as the old error once you do that and go to about you'll see an error that is fine for as developers but you never want to show it to the end user rather if there has to be an error let's show it within a nice UI at least the user will feel better that way to do that let's create a new error. TSX file in the root folder error. TSX in it I'll copy the

    
    37:53
    code provided to us by the next year's documentation this component is is nicely handling the error save and revisit the about page check it out we don't see that red popup anymore rather we see what we have implemented in the error. TSX file something went wrong try again super simple and straightforward to handle errors in xgs right and as I said you can even create these error files specific to different routes if you just want to have one Global error then you can do it by creating a global

    
    38:27
    error TSX file in the root of the app folder that's going to look something like this I'll go into the app and create a new file called Global error. TSX the code will look something like this I'm not sure why my indentation is not working when copying but you get the idea you can specify the HTML and the body and simply show some kind of an error take a note that error boundaries must be client comp components now going back to our app can we see this error well not really unlike layout. TSX which

    
    39:05
    displays everything from its parent the error file Works differently only the closest error file to the route takes priority meaning you won't see the content both from Global a. TSX and from the root error TSX errors will bubble up to the nearest parent error file not all of them make sense and to talk about something else other than errors let's talk about loading uis loading uis in nextjs works very similarly to error handling you want to show some kind of a loading progress while data is being fetched for users

    
    39:44
    with a slow internet connection it is as simple as adding a new loading. TSX file in the folder in there you can create any kind of a loader or a Nic looking spinner now as your page reloads this file will show I'll keep reloading the screen so you can see that loading bar adding loadings to your nextjs really doesn't get simpler than that while the data is loading nextjs will show the content you specified in the loading file and once the data is received the content in the page you're trying to

    
    40:19
    render will be shown it's super useful and surprisingly easy to do I've covered this in more detail in the ultimate nextjs course as you can see here there's an entire section dedicated to it complete with challenges to help you practice but in this crash course you'll also see this in action in the next segment where we'll actually do some real world data fetching and in addition to these main file conventions like page layout error and loading nextjs also provides other features like parallel

    
    40:50
    routes intercepting routes and localization routes that display content based on the user's language you can explore all of these in the next GSS documentation but for now let's move over to data fetching the most interesting Concept in nextjs there are different ways in which we can fetch content a traditional way is using a use effect for example this is what you would do let's say that you have a homepage where you're trying to set and fetch some albums you create a new empty use State you declare a use effect

    
    41:27
    Within which you declare an asynchronous fetching function within it you have an await fetch where you're trying to get some albums and then you return that Json and set it to the state finally going a bit down you map over those albums and show the data but this isn't super efficient there is a better alternative to fetch and it's happening on the server side not only is it faster and more efficient the code is also so much cleaner check this out you declare a new functional component called home and immediately on

    
    42:02
    top of it you make a fetch request you check if it fails if it doesn't you simply declare it and set its response. Json to the album's variable you map over it and display the details go ahead pause this video and test it out you don't necessarily have to do all the Styles but you can at least try to fetch the data map over the albums and show each album title if you do it visit the website and see if it works you'll not see anything you'll have to refresh to see the result and it's not because HMR

    
    42:37
    is not working but rather HMR is caching your content in latest versions of nextjs there is a new feature called server components HMR cache that allows you to cash fetch responses in server components across hot module replacement refreshes in local development ment what this means is you'll have faster responses and reduced costs for build API calls but now coming back to the difference between server side fetching versus client side fetching first of all you'll notice the code difference between the two strategies with server

    
    43:14
    side fetching you wrote fewer lines of code which improves the DX developer experience but that's not the only benefit server side fetching has so many more benefits like improved initial low time as a server side data fetching allows the page to be rendered with the data already included it reduces the time to First contentful paint FCP in the client side example the user sees an empty page until the data is fetched and then rendered the second and most important benefit of server side fetching is better SEO search engine

    
    43:52
    crawlers can more easily index content rendered on the server as the content is already provided in HTML format in contrast client side fetching may result in content not being visible to crawlers right away since it first needs to be fetched and then displayed on the UI which can negatively impact your SEO next not only is the code shorter but the logic is simplified server components allow you to keep data fetching Logic on the server closer to your data source this can simplify your component logic and

    
    44:28
    reduce the need for use effect and use State Hooks and the next benefit is not that easy to understand that first and it is automatic request D duplication nextjs provides that automatic request D duplication when fetching data on the server which can improve performance and reduce unnecessary API calls basically request the duplication makes sure that when the same data is requested multiple times at once only one request is sent it stops duplicate requests from being made and when talking about benefits of

    
    45:04
    the server side fetching versus client side fetching I really can't miss on improved security keeping API calls on the server allows you to better protect sensitive information like API Keys which should never be exposed on the client side and adding to the list of benefits we have reduced Network waterfall client side data fetching often leads to to a network waterfall where requests are made sequentially server side fetching can more efficiently parallelize those requests I'll teach you how to do these parallel

    
    45:37
    requests in our build and deploy project so keep watching but this isn't just about fetching you can server render any other calls maybe a direct database call to Prisma to get the list of posts or even with Mongoose and mongodb like this that's the beauty of nextjs this is achievable because these components are react server components which allow you to access server related resources directly this means we can make direct database calls instead of needing to create an API and then fetch that API once again and if you're still

    
    46:15
    not convinced you can always go for client side fetching how just add Ed client to the top bring back the use effects the use States and you're all set nextjs will allow you to do whatever you think is is best and let's be honest this is how we all used to use next GS when we first transitioned over from react it only feels natural but it is the wrong way to use nextjs and that's what made me create the whole ultimate nextjs course in the first place to teach NEX GS the right way but now take a moment to test both client side and

    
    46:50
    server side rendering you'll notice the differences I mentioned such as seeing the blank page initially with client side rendering or if you inspect it source and see that nothing is there or client side not functioning at all if you disable JavaScript in contrast serers side fetching will still display the results even if JavaScript is turned off in the browser but now that we know that serers side fetching is preferable let's explore different server side strategies that allow you to manage how

    
    47:20
    and when you render your content on the server side you see this is a crucial part of nextjs and I know that some of you might be thinking I just want to code already but without understanding these Concepts you'll probably end up saying I hate nygs it never works the truth is it does work just not for you you just need to write skills to make it happen that's why even on my platform I dedicate an entire section to breaking down these strategies before we touch a single line of code and we'll be doing

    
    47:54
    the same thing in this video trust me it'll will make your life a whole lot easier the first technique is static site generation or SSG a technique where HTML pages are generated at build time this means that the content is created when you deploy your site not when a user requests it it's extremely fast and can be served from a CDN but it's not suitable for websites that need frequently updated content by default xgs uses a static rendering strategy your result is cached and delivered through a CDN Network

    
    48:34
    ideally you want to use this strategy for blogs documentation sites or marketing pages but in many cases you'll have to go for incremental static regeneration or ISR for short it's an extension of SSG that allows you to update static content after you've built your site this means that it'll create static p PES and build time behaving like SSG and then after some time has passed it'll create or update those static Pages once again after you've deployed your site basically it combines the benefits of static generation with

    
    49:13
    the ability to refresh or update content if you want to use ISR as a strategy you can do this in two ways the first one is time based revalidation you can revalidate your entire page after some time by simply exporting a variable called revalidate and set it equal to the number of seconds of when you want to revalidate isn't that crazy expert cons revalidate and then that changes your rendering strategy super simple and the second way is to revalidate the request after some time and that would look something like this you have a

    
    49:49
    Fetch and then you provide the options object with next revalidate the difference between these two is that the first approach uses the revalidate export which is a route segment config it sets the revalidation time for the entire page to 3600 seconds or 1 hour this means that the entire page including all data fetches within it will be revalidated every hour while the second approach uses the next revalidate option in the fetch function it sets the revalidation time specifically for this data fetch to 1 hour this means that

    
    50:28
    only this particular data fetch will be revalidated every 3600 seconds while other parts of the page or other data fetches if any are not affected at all and there's also OnDemand validation instead of doing it on time you can also revalidate using revalidate path and revalidate tag for on demand validation of content I hope that's clear enough that's how you can use ISR are it's perfect for those websites whose content changes occasionally but still doesn't need realtime updates the next rendering

    
    51:05
    strategy is server side rendering or SSR it generates the HTML for a page on the server in response to a user's request this means that the content is created dynamically for each user request and not only for each deployment it's slower than SSG and puts more load on the server but you'll always have up-to-date content this is ideal for highly Dynamic content or pages that need real-time data similar to what we did with ISR you can use the same configs for SSR for timebase revalidation instead of setting it to

    
    51:44
    some random number of seconds you simply set it to zero telling nextjs to render the page every time the user requested and if you only want to do it for specific requests you can use the cash no store or or set the revalidate to zero there and same thing happens with the on demand validation like revalidate path and revalidate tag you can learn more about them in the documentation but so far everything is super intuitive and finally there's the partial pre-rendering PPR it's a new rendering model that combines static and dynamic

    
    52:20
    rendering it allows you to render a static shell of a page while streaming Dynamic content the key key difference with PPR is that it allows for a hybrid approach within a single page unlike other strategies that work on a page level here's how PPR works during build time nextjs generates a static shell of the pages this shell includes the layout and any static parts of the page in the form of components this static shell includes placeholders for dynamic content we do it by wrapping Dynamic components in a suspense tag when a user

    
    52:59
    requests the page the static shell is served immediately and then the dynamic content is streamed in as it becomes available so what does this mean well with PPR you can have static components Dynamic components and components that are partially static and partially Dynamic depending on what you need you'll actually learn about all of these strategies in action in the application you'll develop today so for now now let's keep going we're almost there and ready to start building the app but first I have to tell you a bit about API

    
    53:35
    routes enough with front-end stuff optimization caching performance and all that it's time for some backend work if you've ever done some backend even creating a simple hello world from server message requires a fair bit of setup it involves setting up a project installing necessary packages like Express for node right writing server code setting up Express the port and then making that Port listen running it and then deploying it using some paid or free service so you can finally use it on the front

    
    54:07
    end it might not seem like a big deal when you're just reading or looking at the code but things quickly start getting complicated when you have to write various routes middle Wares and so on but in the newest version of next GS it's super simple much closer to what we did on the front end you just create a special file within a folder for the specific route and you're all set there's no need to set up manage or monitor an active server separately if you want to show the same message hello world from backend in nextjs you simply

    
    54:39
    need to create a folder with any name and then create a special file named route. DS inside it from there you can immediately begin writing server code export async function get return response. Json message hello world from backend that's all there is to it your folder name serves as your API route name with your business logic neatly encapsulated within this special route file if you now go to the browser modify the URL and add hello world to it you'll see Hello World from backend as a response but how can you create other

    
    55:19
    API endpoints like post patch delete and more well for that let's create a book endpoint with a local array as a database a common practice when creating route handlers is to create a folder called API and write all the routes inside it so create this API folder in the app directory and add a database file for storing some dummy books then you can create two routes get and post in app API books route. TSX these are nested routes similar to what you explored previously in the routing part the UI for the delete and

    
    55:58
    put you'll have to create Dynamic route handlers and you already know how to do that app API books and then Dynamic square brackets ID SL routts and inside of it you can export async function put for the update request and then export async function delete for the delete request and then you can add the logic so far this feels good similar to what we did with UI routes but this time for writing server code and creating apis so let's test them one by one to see if they work or not and there you go

    
    56:37
    everything works perfectly this is how route handlers or apis work in nextjs it's super simple and straightforward and the creation of apis in nextjs was nice but how can you use them on the UI well it's a simple fetch just create a books route real quick and call the get API route to fetch the content const responed await fetch Local Host 3000 API books you get them from the response send them to the state and render them if you visit the books route you'll see all of your books as easy as it could be

    
    57:14
    thanks to the serverless architecture of NEX GS and react 19 react server components and there's one final thing I want to teach you before you're ready to start creating your next GS application and that is search engine optimization specifically how we use metadata in nextjs to improve our SEO and when I mention metadata I'm referring to the look and feel of our website when we share it with others on messenging platforms or posted on social media platforms or on internet in general like for example in search engines in today's

    
    57:50
    world we need to ensure that our content is sharable so there are two ways in which we can manage met data in our nextg application the first one is config based all you have to do is create a JavaScript object into the layout or any kind of page file and Export it nextjs will automatically detect it and turn it into relevant meta tags for those routes something like export const metadata is equal to and then in there you can provide all sorts of different SEO properties such as title description thumbnail and more we

    
    58:26
    already already have a config file in our app layout. DSX however if you navigate over to the homepage and add an additional metadata something like home next GS then that one will be taken into account because it's higher on the priority list and it'll override the default specified in the global layout this allows you to either define unique metadata for each route or rely on the metadata from the root layout it's entirely up to you but everything with this discussed so far is just static metadata means that it's not going to

    
    59:00
    change home is always going to be home but there also going to be cases in which you want to create Dynamic metadata based on some kind of content on the page such as a Blog title for example let me show you how I implemented this strategy on JS mastery. proo for the resources page on the main Resource page you'll see different titles and descriptions and if you click on one of the resources you'll see a change in the title and description as well same thing happens for the other resources each has its own title

    
    59:32
    description and image which helps web crawlers index these pages and makes them much more sharable on social media but how can we achieve this in xgs it's super simple the only thing you have to do is export a new async function called generate metadata which gets access to params pams being the same pams that we had before from dynamic routes you can extract the ID or the name or anything else based on that ID you can get full resource details or user profile details whatever it is then you can use those details to formulate

    
    01:00:11
    SEO title descriptions thumbnails and more and you can simply return a dynamic object of all of these properties that's it as simple as that are you with me so far good and the other way in which we can set metadata in nextjs is file based metadata as the name suggests you can put files like a robot sitemap favicon open graph images or other site icons directly inside the app folder and nextjs will automatically detect and generate corresponding meta tags for example you can have an app and then a

    
    01:00:48
    favicon and then an icon and then an open graph image Twitter image all of these properties will get added to your metatags it's just about adding the files with the right names they have to be proper names directly inside the app folder it'll work out the same as the config based approach you can find a full list of all files that can be created to Define metadata here but for the time being I still prefer creating it by exporting the config file from layouts or individual pages and it's worth noting that file-based metadata

    
    01:01:23
    has a higher priority and will override any config based metadata so if you set it in a file it'll be used instead of the ones that you set in the configuration so now you know how to make your apps sharable SEO optimized and search engine cable with that in mind I think you're ready first there was a lot of theory and then there was more Theory disguised in this practical part but now you're ready to dive into code you're ready to Dive Right In and build and deploy your nextjs app with all of these optimizations performance

    
    01:02:00
    updates and new features baked right into it application you will develop and deploy along with the specific nextjs features you'll use on the homepage you'll find a list of startups fetch directly from sanity and the great part is that whenever someone anywhere in the world submits a new startup it'll instantly appear for all the other users here without needing to reload the page you can also search for any startup by title Creator name or category in real time in this case let's go with category

    
    01:02:32
    of Health you just click it right here and you can see that search works instantly for this we're using next gs's latest next form feature which automatically manages the URL State and allows form submissions via keyboard events with minimal code required now if you click on any one of these startups you can view its details including the title date when it was published a description thumbnail more information about the author and then finally the pitch details in this case we just use regular text for the details but if we

