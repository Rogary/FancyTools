# -*-coding:utf-8-*-

class SeedSeeker(object):
    def __init__(self,name):
        '''name of html file'''
        self.name = name

    def openPage(self):
        import codecs

        f = codecs.open(self.name)
        web = f.read()
        return web

    def parsePage(self,response):
        import re

        seedRegexp = re.compile(r'thunder://.+"?|ed2k://.+"?')
        lst = seedRegexp.findall(web)
        seedslst = []
        for s in lst:
            index = s.index('"')
            seedslst.append(s[:index])
        return seedslst
    
    def chooseSeed(self, seedslst):
        '''sendnames : a list of available names'''
        print "%d seed(s) found!"%len(seedslst)
        start = int(raw_input("Which seed to start? Enter an integer: "))
        end = int(raw_input("How many episodes you want? Enter an integer: ")) + start - 1
        seedstr = ''
        for i in range(start-1, end):
            seedstr += seedslst[i]
            seedstr += '\n'
        return seedstr

    def toClipboard(self,seedstr):
        import pyperclip
        pyperclip.copy(seedstr)
        print "All seed links have been copied to clipboard!"
        print "Open downloading software now!"

if __name__ == "__main__":
    print "This seedseeker only supports thunder and ed2k type kk"
    print
    print "open the page, press ctrl + s, save the html file and give it an English name"
    print
    print "Beacause Python's support for Chinese sucks = ="
    print
    name = raw_input("Enter the html file name: ")
    YouAreWorst = SeedSeeker(name)
    web = YouAreWorst.openPage()
    seedslst = YouAreWorst.parsePage(web)
    seedstr = YouAreWorst.chooseSeed(seedslst)
    toClipboard = YouAreWorst.toClipboard(seedstr)


