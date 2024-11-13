def findsum(lst,num):
    if num==0:
        return 0
    else:
        return lst(num-1)+finsdum(lst,num-1)
mylist=[]
num=int(input('Enter the number of elements in the list:'))
for i in range(num):
    n=int(input('Enter element'))
    mylist.append(n)
sum=findsum(mylist,len(mylist))
print('The sum of the lsit',mylist,'is',sum)
