
norm = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890°^!\"§$%&/()=?\\}][{;:_-.,'#*+~><|ß"
raff = "՘՛՚՝՜՟՞ՑՐՓՒՕՔ՗ՖՉՈՋՊՍՌՏՎՁՀՃոջպսռտվձհճղյմշնթըիժխլկծաՠգԈԋԊԍԌԏԎԁԀԉէԘԛ֞ԝԜԟԖԑԐԄԆեՄդբՂԂԃզԔԗԕԞԚԓԒՇԇԅՅצ"


def raffiTrans(word):

	outword = ""

	for x in word:
		i = norm.index(x)
		outword += raff[i]
		pass
	
	return outword


print(raffiTrans("dzeilinger"))

