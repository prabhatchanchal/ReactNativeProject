import requests


def main():
    url = 'http://localhost:3000/login'
    headers = {'Content-Type': 'application/json'}
    data = {
        'email': 'prabhat@mail.com',
        'password': '123456',
        # 'name': 'Prabhat Kumar'
    }
    response = requests.post(url, headers=headers, json=data)
    print(response.text)


if __name__ == '__main__':
    main()
