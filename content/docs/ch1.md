# Chapter 1: Claiming Your first Mesh Device

| **Project Goal**            | Get your Particle Xenon online and claimed to your account                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **What you’ll learn**       | How to claim a new Particle Xenon using the mobile app; Using the Ethernet shield to add network capabilities to a Xenon |
| **Tools you’ll need**       | A Xenon, Ethernet Shield, Ethernet switch access, the Particle Mobile App                                                |
| **Time needed to complete** | 15 minutes                                                                                                               |

In this lab, you'll claim your first Particle Mesh device, the Xenon, with the help of the Particle mobile app and an Ethernet shield. Once you've claimed your Xenon, you'll use [Tinker](https://docs.particle.io/guide/getting-started/tinker/photon/) on the Particle mobile app to interact with your new device.

## Before you start

1.  Create a new [Particle account](https://login.particle.io/signup)
2.  Install the Particle [iOS](https://itunes.apple.com/us/app/particle-build-photon-electron/id991459054?ls=1&mt=8) or [Android](https://play.google.com/store/apps/details?id=io.particle.android.app) App

## Setting up a Xenon & Ethernet shield

1. Open your Xenon Kit. Remove the Xenon and USB cable.

![](./images/01/xenon.jpg)

2. Remove the Ethernet shield from its box.

![](./images/01/ethernet.jpg)

3. Insert the Xenon into the Ethernet shield. Make sure to align the headers so that the 12-pin side of the Xenon is inserted into the 12-pin header on the shield, and the 16-pin side of the Xenon is inserted into the 16-pin header on the shield.

![](./images/01/xenoninshield.jpg)

4. Find an available Ethernet cable at your table and plug it into the Ethernet shield.

![](./images/01/xenonpluggedin.jpg)

5. Take the USB cable that came with your Xenon, plug the larger end into your laptop and the USB mini connector into the Xenon. Once the Xenon powers up, it will automatically enter "[listening mode](https://docs.particle.io/guide/getting-started/modes/photon/#listening-mode)", which means its ready to be claimed.

![](./images/01/listeningmode.gif)

With the Xenon connected and in listening mode, you're ready to claim it with your mobile device.

## Claiming the Xenon from mobile

**Note**: Images below are from the iOS setup. The flow of the Android setup experience is similar.

1.  Open the Particle Mobile App.

[](./images/01/01-mobilesplash.png)

2.  Login, or create a new account if you don't already have one.

[](./images/01/03-mobilelogin.png)

3.  On the "Your Devices" screen, click the "+" in the top-right to add a new device.

[](./images/01/04-mobiledevicelist.png)

4.  Select the "Xenon" option.

![](./images/01/mobileadd.png)

5.  If you haven't done so already, plug your device into power using a USB cable. You can connect to a computer, though this is not required when using the mobile app.

![](./images/01/getready.png)

Make sure your device is in "Listening Mode" (aka blinking blue). If the Xenon is not in listening mode, hold down the SETUP button for three seconds, until the RGB LED begins blinking blue.

![](./images/01/listeningmode.gif)

6.  The next screen will instruct find the data matrix printed on your Xenon and scan it with your Phone's camera. Make sure to allow the app to access your camera to complete this step.

<img src="./images/01/datamatrix.png" class="two-per-line" />
<img src="./images/01/datamatrix2.png" class="two-per-line" />

7. The app will now use Bluetooth to pair with your device so that it can be added to the Particle Device Cloud and associated with your account.

<img src="./images/01/pairing1.png" class="two-per-line" />
<img src="./images/01/pairing2.png" class="two-per-line" />

8. Since you're bringing a new Xenon online and don't yet have a Mesh network configured, the app will next make sure you've connected your Xenon to an Ehternet FeatherWing.

<img src="./images/01/ethernet.png" class="two-per-line" />
<img src="./images/01/ethernet2.png" class="two-per-line" />

9. Once your device has been added to the Device Cloud and associated with your account, you'll want to give it a name and click "Next."

![](./images/01/name.png)

10. Congratulations, you've claimed your first Xenon. We'll set-up a Mesh network and second device in the next lab. For now, let's play with your new Xenon via Tinker [using the instructions below](#interacting-with-your-xenon-with-tinker)!

![](./images/01/name.png)

## Interacting with your Xenon with Tinker

Now that you've claimed your Xenon, let's light up an LED!

**Note**: images below are from the iOS app. The flow of the Android setup experience is similar.

1.  Open the Particle Mobile App.

![](./images/01/01-mobilesplash.png)

2.  Your new device should show up in the list with the name you gave it. If the Tinker firmware is still on the device, you'll see that indicated as well. If Tinker is not still on the device, you can flash it back onto the device using the Particle CLI with the command `particle flash <deviceName> tinker`.

Tap the device you want to interact with via Tinker.

![](./images/01/02-devicelist.png)

3.  When you select a device flashed with the Tinker firmware, you'll see a list of all the GPIO pins on the Xenon, eight on each side, or 16 in total. With Tinker, you can control the digital and analog pins via reads and writes. If you have sensors or actuators connected to the Xenon, you can control them with Tinker.

![](./images/01/03-tinker.png)

4.  Every Xenon has a blue LED that's connected to pin D7, and we can use Tinker to control this LED. Tap on the circle marked "D7" and you'll see a pop-up that gives you two options, `digitalRead` and `digitalWrite`. We'll learn more about what these mean in a future lab. For now, click on `digitalWrite`.

![](./images/01/04-d7.png)

5.  Once you select `digitalWrite` the pin button will be highlighted in red and show its current value. At first, this value will be digital `LOW` (or 0).

![](./images/01/05-d7low.png)

6.  Tap the button. You'll notice that it changed to `HIGH` (or 1).

![](./images/01/05-d7high.png)

7.  When the value changes to high, you'll also notice that the blue light at D7 is on! Behind the scenes, Tinker is calling the `digitalWrite` and passing in either a `LOW` or `HIGH` value, which turns the LED off or on. Press the button again and you'll note that the LED turns back off.

![](./images/01/06-d7on.jpg)

Congratulations! You've claimed and named your first Xenon, and made it light up using the Tinker app. Now lets bring a second Xenon online and create our first Particle Mesh network!
