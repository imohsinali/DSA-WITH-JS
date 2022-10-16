import requests
from bs4 import BeautifulSoup
import csv
import xlwt 
from xlwt import Workbook
for page_num in range(1):
  url= "https://jo.opensooq.com/en/cars/all?page="+str(page_num)
  r=requests.get(url)
  htmlconetnt=r.content
  soup=BeautifulSoup(htmlconetnt,'html.parser')
  dataarray=soup.find(id="gridPostListing").getText()
  print(len(dataarray))
  print(dataarray)

filename = 'car1.csv'
with open(filename, 'w', newline='') as f:
    w = csv.DictWriter(f,[dataarray])
    w.writeheader()
    
        
  
# Workbook is created
wb = Workbook()
  
# add_sheet is used to create sheet.
sheet1 = wb.add_sheet('Sheet 1')
  
sheet1.write(1, 0, dataarray)
sheet1.write(2, 0, 'SHASTRADHARA')
sheet1.write(3, 0, 'CLEMEN TOWN')
wb.save('xlwt example.xls')
