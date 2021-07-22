# Hosting evolution from web developer's perspective

## 1. Hosting a single app on a [physical](https://www.youtube.com/watch?v=9HDEHj2yzew) server
### Pros
- The most straightforward  solution of all: connect your workstation to the internet then spin up a web server.
### Cons
- As always, there are some caveats. You must keep your computer up 24/7 and acquire a static IP from the internet service provider.
- Difficult to optimize resource utilization, because the hosted app might not match the hosts capabilities. The host might have too little or not enough storage, memory or computational power.

## 2. Hosting multiple apps on a physical server
### Pros
- Better hardware utilization if the host is powerful it can handle multiple apps.

### Cons
- If one of the apps is of bad quality it can hog all the resources leaving none for the rest.
- What if each app requires a different OS?
- What if each app requires a different runtime version? For example, one app requires node 6 and another node 14?

## Hosting apps in a virtual machines
### Pros
- Better hardware utilization. Powerful hosts can handle multiple VMs.
- Each VM can run different OS and/or runtime version.
- It's possible to limit resources to isolate low quality apps.

### Cons
- VMs are heavy. A modern OS can take up several GB of space. Does it really make sense to install an OS several times just to support multiple node versions?
- Hardware emulation is computationally expensive. 
- Difficult to maintain. If you maintain hundreds or event thousands of VMs how do you install OS security updates?

## Hosting apps in containers
### Pros
- Great HW utilization. Powerful hosts can handle multiple VMs.
- Lightweight compared to VMs. Megabytes instead of terabytes.
- Possible to limit resources.

### Cons
- Windows servers might be considered out of scope. Some might even list this as an advantage :)
- deployment, scaling and maintenance still requires custom written CI/CD pipelines.

## Hosting apps using container orchestration systems such as Kubernetes
### Pros
- Out of the box standard deployment, scaling and maintenance.

### Cons
- The IT community is still figuring these out :). It was decided to deprecated the Docker runtime in Kubernetes, because its architecture wasn't designed for container orchestration in mind.


