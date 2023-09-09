# Everything I have learned so far

## Git Exercise

I learned about basic git commands like:

```
git clone
git add .
git commit -m ""
git push
git pull
```

I now feel more capable at resolving conflicts as well! :D

## AWS EC2 Services

I learned that you can very easily set up a secure server where you can host just about anything you want, and it's not even that expensive! That's awesome!!!! I have used Caddy and PM2 before, and I think this is so cool that you can actually use Caddy to assign domain names to applications and host apps through an EC2. It works just like a physical ubuntu server, like Writeoff which we use at work, but this is a virtual server. So cool!!!!!! I just wonder you you can make the main connection to the IP address of the server an https secure connection instead of http connection.

### Ip address to visit the awesome ec2 instance

http://3.232.1.70/

To ssh into it, find your private key and:

```
chmod 400 "key.pem"
ssh -i "key.pem" ubuntu@ec2-3-232-1-70.compute-1.amazonaws.com
```