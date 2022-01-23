import csv

def save_to_file(jobs):
  file = open("jobs.csv", mode='w')
  writer = csv.writer(file)
  writer.writerow(['title','company','location'])
  for job in jobs:
    writer.writerow(job)
  return 