import requests, json
from bs4 import BeautifulSoup

### Steam scrape code ###

def STEAMget_info(URL):
    page = requests.get(URL)
    soup = BeautifulSoup(page.text, "html.parser")
    price = soup.find("div", class_="game_purchase_price price")
    name = soup.find("div", id="appHubAppName")
    description = soup.find('div', class_="game_description_snippet")

    print(price.text.strip())
    print(name.text)
    print("Steam")

    return price.text.strip(), name.text, 'Steam', description


### CDKeys code ###


def CDKEYget_info(URL):
    page = requests.get(URL)

    soup = BeautifulSoup(page.text, "html.parser")

    # results = soup.find("div", class_="page-title")
    price = soup.find("span", class_="price")
    title = soup.find("h1", class_="page-title")
    platform = soup.find("div", class_="value")

    print(price.text)
    print(title.text)
    print(platform.text)
    return price.text, title.text, platform.text
    #return these values ^^^^


def addDict(Dict, Main_Dict, price, title, platform, URL):
    Dict['name'] = title
    Dict['price'] = price
    Dict['platform'] = platform
    Dict['URL'] = URL
    Dict['Description'] = "x"
    Main_Dict[title]= Dict



#may need

def write_info(price, title, platform):
    # offer_info = results.find_all(string="offers")
    with open('prod_info', 'w') as f:
        f.write(price)
        f.write(title)
        f.write(platform + "\n")
        # f.open('prod_info.txt', )



### json from - https://stackoverflow.com/questions/7100125/storing-python-dictionaries###

def write_json(Dict):
    with open('data.json', 'w') as fp:
        #data = json.loads(fp)
        #data.append(Dict)
        json.dump(Dict, fp, indent=6)
        fp.close()



def update_json(Dict, title):
    with open('data.json', 'r') as fp:
        data = json.load(fp)
        fp.close()
    with open('data.json', 'w'):
        data[title] = Dict
        json.dump(data, fp)
        fp.close()

# DONT WORK :))) #
