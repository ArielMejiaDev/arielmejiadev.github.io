---
id: 25
published: true
title: Set Github Credentials In MacOS
date: April 26th, 2022
description: Set Github Username & Email in your MacOS equipment
cover_image:
tags: [DevOps]
announcement_banner:
announcement_link:
---

## Set git username and email

First you need to set your `username` and `email`, in the terminal replace `<USERNAME>` and `<EMAIL>` with your own

```shell
git config --global user.name "<USERNAME>"
git config --global user.email <EMAIL>
```

## Set SSH key

In your terminal type

```shell
ssh-keygen -t rsa
```

Then it would ask some questions, you can skip all with <enter> or fill as you need

Now you need to copy this `SSH key` to paste it on `github` or `gitlab` as you need:

```shell
cat ~/.ssh/id_rsa.pub | pbcopy
```

With this command you have your `SSH key` in the clipboard ready to paste it with `<command> + <v>`

## Add your SSH key in Gitlab

First Logged in, then go to the right up corner and open the user avatar menu, then click on `settings`, 
then go to the left sidebar to the section `SSH Keys`, you are going to be able to see a form to add an `SSH Key`

![Gitlab Create SSH Screen](/images/blog/17/gitlab-screen.png)

## Add your SSH key in Github

Go to the right up corner, open the avatar menu, then go to `settings`, 
you are going to be able to see in the left sidebar an `SSH & GPG Keys` section, 
click there, and you are going to be able to see all your `SSH keys`, and a green button to `add new SSH key`, 
Here you can add your `new SSH key`

![Github Create SSH Screen](/images/blog/17/github-screen.png)