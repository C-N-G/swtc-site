## Idea 1. (Current Implementation)
Cohesion is hidden from most players.
Maximum Cohesion is a static number.
Cohesion decreases by 1 when a Loyalist Agent dies.
Subversives win when Cohesion reaches 0.

Pros:
- Very simple to understand.

Cons:
- Not balanced at varying player counts.
- Not integrated into the game in a fundamental way that most players interact with.

## Idea 2. (Current Implementation w/ scaling maximum Cohesion)
Cohesion is hidden from most players.
Maximum Cohesion scales based on player count. 
Cohesion decreases by 1 when a Loyalist Agent dies.
Subversives win when Cohesion reaches 0.

Pros:
- Simple to understand.

Cons:
- Not integrated into the game in a fundamental way that most players interact with.

## Idea 3. (Cohesion value system)
Cohesion is hidden from most players.
Maximum cohesion is calculated by every role's "Cohesion value".
Cohesion decreases by a role's Cohesion value when they die.
Subversives win when Cohesion reaches 0.

Pros:
- Every role having a Cohesion value enables new information gathering abilities that interact with it.
- Every role having a Cohesion value enables a new vector for balancing certain roles, i.e. strong roles having a higher cohesion values so they're incentivized to stay hidden even more.
- More integrated in the game (compared to current implementation) that forces players to engage with the system and consider its impacts.

Cons:
- More complex than current implementation.
- Maximum Cohesion being equal to the sum of all role's cohesion values combined with Subversives winning when Cohesion reaches zero means that as a win condition for the Subversives what is the functional difference in a Cohesion victory vs just killing everyone? Only subversive roles that decrease cohesion without killing would be able to properly interact with this system.
- Every role having a different number by which they effect Cohesion enables corroborating certain cohesion value changes with people's claimed roles to ascertain if they are lying or not if you're able to see Cohesion. (Maybe this isn't actually bad, and is actually just another part of the logic puzzle that is this game?)

## Idea 4. (Cohesion value system w/ Subversive win condition at half max cohesion)
Cohesion is hidden from most players.
Maximum cohesion is calculated by every role's "Cohesion value".
Cohesion decreases by a role's Cohesion value when they die.
Subversives win when Cohesion is equal to half or less of the maximum cohesion.

Pros:
- Every role having a Cohesion value enables new information gathering abilities that interact with it.
- Every role having a Cohesion value enables a new vector for balancing certain roles, i.e. strong roles having a higher cohesion values so they're incentivized to stay hidden even more.
- Subversives winning when Cohesion is equal to half (or less) of the maximum cohesion means that subversive players that can't decrease cohesion directly are still allowed to properly interact with the system, i.e. targetting high cohesion value targets in the night to kill.
- More integrated in the game (compared to current implementation) that forces players to engage with the system and consider its impacts.

Cons:
- More complex than current implementation.
- Subversives winning when Cohesion equals half (or less) of the maximum cohesion probably means the overwhelming majority of subversive wins would be via this win condition instead of killing everyone. This has the side effect of faster games that could end earlier, and also means most games probably won't go down to a vote between a final 3 or 4 players. (Maybe this isn't a negative? Maybe there is a benefit in faster games, plus it puts even more pressure on high cohesion value loyalist roles lying and staying hidden?)
- Every role having a different number by which they effect Cohesion enables corroborating certain cohesion value changes with people's claimed roles to ascertain if they are lying or not if you're able to see Cohesion. (Maybe this isn't actually bad, and is actually just another part of the logic puzzle that is this game?)

## Idea 5. (Public Cohesion, decreasing every day)
Cohesion is visible for all players.
Maximum Cohesion scales based on player count.
Cohesion decreases by 1 every day.
Subversives win when Cohesion reaches 0.

Pros:
- Very simple to understand.
- All players interact with the system, even in a minimal way.
- This effectively adds a soft day limit to the game. This could help speed up the game and put pressure on players.

Cons:
- Doesn't add much to the game beyond a day limit that occasionally interacts with certain abilities.
- Hard confirms the existence of any role/char that makes changes to Cohesion to all players because Cohesion is visible to everyone.
- This effectively adds a soft day limit to the game. This could limit the viability of certain antagonists and other roles.

## Idea 6. (Public Cohesion, Cohesion event card system)
Cohesion is visible for all players.
Maximum Cohesion is a static number.
Certain abilities or the deaths of certain roles change the cohesion, or even every day.
As Cohesion decreases certain Cohesion Cards are drawn which have unique effects on the game that are negative for the Loyalist team.
For example, Cohesion reaches 50/100 (one Loyalist is now malfunctioning.) etc.

## Idea 7. (Cohesion value system w/ Player count scaling Cohesion)
Cohesion is hidden from most players.
Maximum cohesion is calculated by player count.
Cohesion decreases by a role's Cohesion value when they die.
Subversives win when Cohesion reaches 0.

Pros:
- Every role having a Cohesion value enables new information gathering abilities that interact with it.
- Every role having a Cohesion value enables a new vector for balancing certain roles, i.e. strong roles having a higher cohesion values so they're incentivized to stay hidden even more.
- Subversives winning when Cohesion equals 0 combined with a more static max cohesion determined by player count allows for most antagonist roles to interact with the system.
- More integrated in the game (compared to current implementation) that forces players to engage with the system and consider its impacts.

Cons:
- More complex than current implementation.
- Games could end before coming down to 3-4 players. This means faster, and possibly less tense, games. (Is this a bad thing?)
- Every role having a different number by which they effect Cohesion enables corroborating certain cohesion value changes with people's claimed roles to ascertain if they are lying or not if you're able to see Cohesion. (Maybe this isn't actually bad, and is actually just another part of the logic puzzle that is this game?)