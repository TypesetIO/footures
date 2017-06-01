# footures
Browser side features flags with a neat UI to help staff-users turn them on. Provides a query API for developers.

## Installation

First, install footures: `npm install --save footures`
## Querying availability of feature on browser

In your application,

```javascript
import footures from 'footures';

if (footures.isEnabled('wild-colors')) {
  // Code that shows wild colors...
} else {
  // Code that shows tame colors...
}
```

## Registering feature for admin screens (Optional)

If your `isEnabled()` query is executed, then this is not required. But there
may be pieces of your code where `isEnabled()` is only invoked when a user takes some action. In those cases, you might want to register your feature name explicitly. That way, when staff users see the admin screen, they see your feature name as a checkbox.

```javascript
import footures from 'footures';

footures.register('feature-1', 'feature-2', 'feature-3');
```

## Admin (enable/disable/view)

`footures` are not meant to be visible to users. It is not an AB framework or an incremental availability tool. It is only meant to be used by staff. That means your users shouldn't have access to the admin screens or the ability to enable flags at all.

Right now, we prevent users from enabling footures on their own by not supplying the admin javascript. 

Note: If the users have access to this repository, they potentially *could* use a feature. Even if *you* are not loading the admin javascript.