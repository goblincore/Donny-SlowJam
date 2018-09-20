
<p align="center">
<img src="https://github.com/thinkful-ei22/Donny-Playground/blob/master/screenshots/godsplan.gif">
</p>

## Slowjam - Slow your roll 🐌🐢

Created using React Native and Expo SDK.
The basic idea of this app is a Youtube music playing application, with a twist - the audio is processed so that it's sl o w w w e d down (both time and pitch). This has the effect of elevating the pathos of certain songs - for example, try listening to **The Smith's "Heaven knows I'm miserable now"** at 70% speed - it's epically tragicomic. The current contemporary cultural interest of slowed-down music has its origins in the pioneering efforts of Robert Earl Davis Jr. (July 20, 1971 – November 16, 2000), better known as DJ Screw, whose "chopped-and-screwed" mixes are a deep and compelling exploration of slowness as form.

## Technical Challenges

This app was created as part of Flex Week in the Thinkful Engineering Immersion Program. The goal of this particular week is to practice learning a new technology/framework/etc in a week by yourself. In this case, I chose React Native (with no previous experience or knowledge of it) because I thought it would be fun!

After reading the React Native docs and perusing links and tinkering with example code, I decided on the idea and discovered some immediate hurdles:

1) I wanted to use Expo for its ease-of-use in rapid prototyping - however, Expo does not have a Youtube player component.

Possible solutions that I discovered include:

a) Detach the project and install the react-native-youtube library.

b) Load Youtube Videos from a React Native WebView.


Both of these solutions have their own advantages and disadvantages,with loading Youtube videos from a WebView being the simplest and fastest workaround since I could remain within a completely Expo workflow.

However neither of these solutions offer the ability to process the audio stream.

In order to achieve this, I came up with an addition solution:

c) TakeRun a Node server that takes a Youtube stream and processes it using FFmpeg, then streams that back to the client.

d) 





