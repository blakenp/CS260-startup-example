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

### AWS Route53 DNS Services

I already knew how to register domains and create A records, but this was a good reminder of how to point these records to specific IP addresses. It's always so satisfying to see your domain connected to running code. I registered a domain I will use to create a website for my wife's folklore dance company, so I'm excited to do that in the future.

### How to run HTML locally

Just run the follwing commands to see the html in localhost:8000

```bash
cd /html
python -m http.server
```

### HTML and Deployment Notes

I thought it was cool that you can just create a personalized bash script and run it to send files up to an EC2. Also, I hadn't used audio html tags before and was able to find ways to inspect pages to find where audio files are stored so I could use those files in any application I will create. Even though a lot of this was review, it was a good refresher and I still learned a couple of new things like how to make tables in HTML too.

### CSS

Wow, I still have a long way to go with styling better, but I feel like I got a much better feel for how to put things in flex boxes and how to style things in simple ways. There are so many pre-built css things through bootstrap and tailwind css, but it's ok to look those up if you can't remember because there are so many. Also, I learned that float: "right"; can put text at the far right side of the page. Cool! I also liked how you can choose a font for the whole app by just saying: 

```
@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');

* {
    font-family: 'Kalam', cursive;
}
```

Overall, I felt like a grew and even though I don't like artistic things like styling all that much, this was actually kind of fun.

### Javascript

I already knew most things we were taught about javascript thanks to working for Dr. Clement's lab, but I enjoyed having more practice with injecting javascript into the DOM. I also liked reading up on await and async to understand better how that works.