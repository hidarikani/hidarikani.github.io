# Scaling evolution from web developer's perspective

## 1. Upgrade the physical server (vertical scaling)

Add more resources: expand the storage, expand memory, install a faster CPU.

### Pros
- Sounds like fun if you're a nerd :)

### Cons
- Requires downtime
- If the user base grows exponentially can hit the wall quite fast 

## 2. Add one more physical server (horizontal scaling)

### Pros
- Works around the physical limitations of a single computer

### Cons
- In practice usually means adding two more machines because one is required to route traffic between the other two
- Resources are idle if the load is fluctuating, for example load is much higher during particular time of the day/year

## 3. Adaptive scaling (container orchestration)
When load increases additional pods are initialized

## Pros
- On demand hardware resources

## Cons
- The monthly bill might be shocking if no capping is enabled