#encoding=utf-8
import psyco
psyco.full()
import re
from time import time
kwd = [x.rstrip() for x in file("keyword_base_s.txt").readlines()]
text = file("text.txt").read()
regfilter = re.compile("|".join(kwd))
from smallgfw import GFW
gfw = GFW()
gfw.set(kwd)

def test_check(ct):
    print "check "+str(ct)+" times"
    start = time()
    for i in xrange(0,ct):
        mc = regfilter.findall(text)
    cost = time()-start
    print "re cost:",cost

    
    start = time()
    for i in xrange(0,ct):
        mc = gfw.check(text)
    cost = time()-start
    print "smallgfw cost:",cost
    print "==================================="

def test_replace(ct):
    print "replace "+str(ct)+" times"
    start = time()
    for i in xrange(0,ct):
        mc = regfilter.sub("*",text)
    cost = time()-start
    print "re cost:",cost

    
    start = time()
    for i in xrange(0,ct):
        mc = gfw.replace(text,"*")
    cost = time()-start
    print "smallgfw cost:",cost
    print "==================================="
    
if __name__ == "__main__":
    for i in xrange(1,21):
        test_check(i)
    for i in xrange(1,21):
        test_replace(i)