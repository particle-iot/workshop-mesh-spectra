---
title: Building a meshed IoT-solution
---

# Putting it all togehter

<SessionHeader
:goal="'Building a minimal mesh solution'"
:time="25"
:tools="[
    'Argon',
    'Grove starter kits for Particle mesh',
    'A partner, also with an Argon + Grove kit'
    ]"
/>



In this session, it will all come together. One device is measuring a distance and broadcasting the value, while another is listening for updates and displaying them on a digital display. If you get stuck at any point in the process, you can see the code for the completed lab [here](http://about:blank).

### Partner up with your neighbour
Also for this session, it is necessary to cooperate in groups of at least two participants. Group members will have to implement different code depending on the role of their device. One group member should implement the *remote distance sensor* code, the other(s) should implement the *remote display* code.

::: tip Do yo come prepared?
It is assumed that you come to this session with all of your group's Argons already on the same mesh network.
:::

## Remote distance sensor
In a [previous session](grove-kit-distance-display.md) you wrote code that read the distance from the ultrasonic distance sensor in the Grove sensor kit.

1. Make a new app and copy paste the part of the code that did the reading of the sensor. It should look something like this:

```cpp
<insert-code-here>
```

2. Now take that reading and publish it to the mesh network. The group needs to agree on a name for the event – in the example we will use `dist-cm`.

```cpp
<insert-code-here>
``` 

3. Upload this code to the device connected to the distance sensor.


## Remote display

1. Make a new app and set up a subscription to the distance sensor broadcast. The group needs to agree on a name for the event – in the example we will use `dist-cm`.

```cpp
<insert-code-here>
``` 

2. In a [previous session](grove-kit-distance-display.md) you wrote code that showed a value on the digital display from the Grove sensor kit. Copy paste the part of the code that did the displaying of the value into the handler function.

```cpp
<insert-code-here>
```

3. Upload this code to the device connected to the distance sensor.

Now, every time a distance measurement is broadcasted by the , the display is updated, hooray!!!

This concludes the workshop :tada:


::: tip Feedback for the workshop

If you fill out this [5 question survey](https://goo.gl/forms/jQFWiEgWw7WCjIXM2), we may improve this workshop to benefit future *workshoppers*, or just pad ourselves on the back for doing great. And you may **win a 3D printed case** for the Grove sensor shield (only participants at ThingsCon 2018).
:::




## More mesh?
Feel you want more mesh? Try adding features to your IoT mesh solution see these [hidden hints](extra.md).










