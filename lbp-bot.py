#
#https://lb-planer.tgm.ac.at/api/v1/setData
#
#
#sess_key: F23D99AD625007E4449AA89D69AA1C84E0EC7C0F7753071EB2898B7A872BCB5B9F0DDB31D5201E731E980477AF78CF88F85C5B8BE2F17E172E18A0BBAC3C6CBC
#
#{
#"begin":"2019-10-16T11:20:00.000Z",
#"end":"2019-10-16T14:50:00.000Z",
#"subject":"itsi",
#"sess_key":}
#
#
#
#https://lb-planer.tgm.ac.at/api/v1/login => POST
#{
#	sess_key:"undefined",
#	username:"՝Ճ՜ՐՕՐ՗՞՜Ջ",
#	password:"ռՌՋՖտՕՖՎԋԉԋԉԋԉ"
#}
#
#response: session_key;
#
#https://lb-planer.tgm.ac.at/api/v1/setData => {
#	begin:DATUM+"T"+Uhrzeit-2+"Z",
#	end:DATUM+"T"+Uhrzeit-2+"Z",
#	sess_key:-----,
#	subject: 
#}
#
#
#
#abcdefghijklmnopqrstuvwxyz
#՘՛՚՝՜՟՞ՑՐՓՒՕՔ՗ՖՉՈՋՊՍՌՏՎՁՀՃ
#
#ABCDEFGHIJKLMNOPQRSTUVWXYZ
#ոջպսռտվձհճղյմշնթըիժխլկծաՠգ
#
#°^!"§$%&/()=?\}][{;:_-.,'#*+~><|ß
#էԘԛ֞ԝԜԟԖԑԐԄԆեՄդբՂԂԃզԔԗԕԞԚԓԒՇԇԅՅצ
#
#1234567890
#ԈԋԊԍԌԏԎԁԀԉ
#
#
#
#

#2019-10-11T09:30:00.000Z




import requests
import sys
import getopt

norm = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890°^!\"§$%&/()=?\\}][{;:_-.,'#*+~><|ß"
raff = "՘՛՚՝՜՟՞ՑՐՓՒՕՔ՗ՖՉՈՋՊՍՌՏՎՁՀՃոջպսռտվձհճղյմշնթըիժխլկծաՠգԈԋԊԍԌԏԎԁԀԉէԘԛ֞ԝԜԟԖԑԐԄԆեՄդբՂԂԃզԔԗԕԞԚԓԒՇԇԅՅצ"


def raffiTrans(word):

	outword = ""

	for x in word:
		i = norm.index(x)
		outword += raff[i]
		pass
	
	return outword




try:
	opts, args = getopt.getopt(sys.argv[1:],"d:b:e:s:")
except getopt.GetoptError:
	print("this -d <DATUM JJJJ-MM-TT> -b <BEGIN SS:MM> -e <ENDE SS:MM> -s <FACH zB: insy, itsy, ...>")
	sys.exit(2)


c = 0

for opt, arg in opts:

    if opt in ("-d"):
        datum = arg
        c+=1
    elif opt in ("-b"):
        beg_uhrzeit = str(int(arg[:2])-2)+arg[2:]+":00.000"
        c+=1
    elif opt in ("-e"):
        end_uhrzeit = str(int(arg[:2])-2)+arg[2:]+":00.000"
        c+=1
    elif opt in ("-s"):
        subject = arg
        c+=1


if c<4:
	print("this -d <DATUM JJJJ-MM-TT> -b <BEGIN SS:MM> -e <ENDE SS:MM> -s <FACH zB: insy, itsy, ...>")
	sys.exit(2)

login = requests.post('https://lb-planer.tgm.ac.at/api/v1/login', json={
	"sess_key": "undefined",
	"username":"՝Ճ՜ՐՕՐ՗՞՜Ջ",
	"password":"ռՌՋՖտՕՖՎԋԉԋԉԋԉ"
})

sess_key = login.json()['session_key']

print(sess_key)



fach = requests.post('https://lb-planer.tgm.ac.at/api/v1/setData',json={
	"begin":datum+"T"+beg_uhrzeit+"Z",
	"end":datum+"T"+end_uhrzeit+"Z",
	"sess_key":sess_key,
	"subject":subject
})

print(fach.json())


# insy , medtweb , medtmm , medt , itsi , sew , itp