import re
from datetime import date
from firabase_db_connection import firestore_send_off

def email_check(email):
  if not re.match(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b', email):
    print('Invalid email address.')
    email = input('Enter email: ')
    email_check(email)
  else:
    return email

def agree_check(agree):
  if agree == 'y':
    return True
  else:
    print('You must agree to the terms and conditions to submit a contact request.')
    agree = input('Do you agree to the terms and conditions?  (y/n): ')
    agree_check(agree)

def reason_check(reason, count):
  try:
    if count < 3:
      reason_int = int(reason)
      if reason_int > 0 and reason_int < 6:
        return reason_int
      else:
        print('Invalid reason.')
        reason = input('''
                What is the reason for your contact request? (optional):
                1. Job offer
                2. Business inquiry
                3. Collaboration
                4. Event invitation
                5. Other
                ''')
        print('Please leave a message for further details.')
        count += 1
        reason_check(reason, count)
    else:
      return 5
  except ValueError:
    print('\nOnly numbers are allowed.')
    print('There will be an option to leave a message if you need to explain \n')
    count += 1
    reason_check(reason, count)

def contact_request_send_off():
  first_name = input('Enter first name: ')
  last_name = input('Enter last name: ')
  email = input('Enter email: ')
  
  if not re.match(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b', email):
    email = email_check(email)  

  agree = input('Do you agree to the terms and conditions? (y/n): ')
  terms = agree_check(agree)    
  reason = input('''
            What is the reason for your contact request? (optional):
            1. Job offer
            2. Business inquiry
            3. Collaboration
            4. Event invitation
            5. Other
            ''')
  reason_validation = reason_check(reason, 0)
  message = input('Enter message: ')
  
  data = {
      'first_name': first_name,
      'last_name': last_name,
      'email': email,
      'reason': reason_validation,  
      'message': message,
      'agreed': None,
      'date': date.today(),
      'db': 'contact'
    }
    
  if terms == True:
    data['agreed'] = True
    firestore_send_off(data)
    print('Contact request sent. Thank you.')
  else:
    print('Contact request not sent.')

contact_request_send_off()

""" 

  |         |
  -----------
  |         |
  -----------
"""