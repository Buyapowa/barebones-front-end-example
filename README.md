**Background**

As a customer (referrer), I would like to view a page with a URL that I can share to my friends. 
When my friends checkout, I should get a reward and be able to know I have a reward.

**Value**

Customers can refer their friends, get rewards, and be incentivised to refer more friends.

**Expectations**

The following components will need to be created:

***Share Link***

A component that generates a unique share link per customer. The share link component has a button, 
that when clicked copies the share link to the system clipboard.

A page will have to created, so that when a friend navigates to this page he or she will be given an 
option to accept or reject the reward. If the friend accepts the request, this page will have to
capture their name.

This page must be created but does not need to be styled.

***Activity Feed***

The activity feed consists of:

 - A notifications section, that displays the latest notification at the top and pushes the rest of
     the notifications down. Only display three notifications at a time.
 - A total rewards section, which displays the total number of rewards awarded for this share link
     (the total number of friends that clicked accepted the reward).

The following notification need to be displayed:

  - A notification when a friend accepts the reward along with the friend's name.
  - A notification when a friend did not accept the reward.
  - A notification when you try to refer yourself.

***Share box***

The share box only needs to implement simple validation to check whether the customer tries to refer
themselves. If this happens a notification should be displayed in the notification area.

Use any tools/libraries/frameworks you feel comfortable using.
