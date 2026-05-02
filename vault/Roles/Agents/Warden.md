---
name: Warden
team: Loyalist
type: Agent
flavour: There you are! Desperate times call for desperate measures. Grab a gun and let's go!
ability: |
  Each night, you must choose a player: if you choose the Prisoner, they learn this and become an Agent role of their choice.
orderType: role_converts_others
attributes:
  - Human
setup:
  - - If there is no Prisoner, +1 Prisoner.
    - AddInvariant 1 Role Prisoner
reminders:
  - - ⛓️
    - "#0000FF"
    - "Warden: Chose this player."
---
> [!infobox]
> |  |  |
> | ---- | ---- |
> | Team | Loyalist |
> | Type | Agent |
> | [[Attributes]] | Human |
> 
>  “There you are! Desperate times call for desperate measures. Grab a gun and let's go!”

## Ability
Each night, you must choose a [[player]]: if you choose the [[Prisoner]], they learn this and become an [[Agent]] [[role]] of their choice.

## Setup Effects
If there is no [[Prisoner]], +1 [[Prisoner]].

## Examples
- John is the Prisoner. The Warden wakes up, chooses John, and then goes back to sleep. John wakes up and is informed that they were chosen by the Warden and must pick an Agent role to become.
- John is the Prisoner. The Warden wakes up, chooses Jane, and then goes back to sleep. Jane does not wake up as they are not the Prisoner.
- The Warden is malfunctioning. John is the Prisoner. The Warden wakes up, chooses John, and then goes back to sleep. John does not wake up as the Warden was malfunctioning.

## How to Play
- Adding the Prisoner to the game might seem bad for the Loyalist team, but knowing a Detrimental role that is definitely in play is information that you know is true, this can help you to understand the state of the game. If you manage to find them with your ability, then you'll also remove a Detrimental role from the game, thus helping the Loyalist team even more.
- You do not lose your ability when you successfully choose the Prisoner. Be mindful that players you choose might pretend to have been the Prisoner and pretend to have changed role due to your ability.  Without corroborating information you won't know the truth.

## How to Narrate
- Ensure there is a Prisoner in the game. Each night, wake up the Warden. Ask them to choose a player. Send them back to sleep. If the Warden chose the Prisoner, wake the Prisoner up. Tell the Prisoner they were chosen by the Warden and must choose an Agent role of their choice to become. Turn the Prisoner into the role of their choice. Send the Prisoner back to sleep.