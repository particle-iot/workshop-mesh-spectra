---
title: Messaging in the mesh
---

# How to Mesh

<SessionHeader
:goal="'Publish and receive messages to/from the mesh.'"
:time="20"
:tools="[
  'Argon',
  'Grove starter kits for Particle mesh',
  'A partner, also with an Argon + Grove kit'
  ]"
/>

In this session, we'll leverage a local mesh network to quickly send messages between devices. If you get stuck at any point in the process, you can see the code for the completed lab [here](http://about:blank).

### Partner up with your neighbour
From now on and the rest of the workshop, it is necessary to cooperate in groups of at least two participants.

The code you'll write in this lab will live on your Argon. Each group-members should do their own code for their own device, even if it is the same code for all devices at this point.

::: tip Do yo come prepared?
It is assumed that you come to this session with an Argon that you are able to program.
:::

## Setting up the mesh network

> Can two devices on different accounts actually be on the same mesh network? If not, we need to figure out how to proceed. Should both participants code on the same computer then?


## Sending & Receiving messages

Let us take a look at two of the newest functions provided by Particle: `Mesh.publish()` and `Mesh.subscribe()`. These primitives allow you to send and receive messages within a Particle Mesh network.

Create a new app in the [Particle Web IDE](https://build.particle.io/build/new), name it *MeshPubSubTest.ino* or come up with a more creative name.

### Sending messages
On using `Mesh.publish()`...



### Receiving messages
On using `Mesh.subscribe()`...


Congratulations, you are now able to send/receive messages to/from the mesh network. Easy, right?
