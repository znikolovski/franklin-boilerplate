# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--{repo}--{owner}.hlx.page/
- Live: https://main--{repo}--{owner}.hlx.live/

## Installation

```sh
npm i
```

## Tests

```sh
npm tst
```

## Local development

1. Create a new repository based on the `helix-project-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [helix-bot](https://github.com/apps/helix-bot) to the repository
1. Install the [Helix CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/helix-cli`
1. Start Helix Pages Proxy: `hlx up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)


```
 {
  "ok": true,
  "integration": {
    "imsEndpoint": "ims-na1.adobelogin.com",
    "metascopes": "ent_aem_cloud_api",
    "technicalAccount": {
      "clientId": "cm-p35322-e554302-integration-0",
      "clientSecret": "p8e-K4M0RRz1s3YuZzxHVacd_aEYEvwFvDoT"
    },
    "email": "212bc3d1-279c-48f3-bb1c-2ec64d1c6399@techacct.adobe.com",
    "id": "393225256406865F0A495CD9@techacct.adobe.com",
    "org": "28260E2056581D3B7F000101@AdobeOrg",
    "privateKey": "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEogIBAAKCAQEA3CZl+fmtwWBjBKxXD8maJC4baAuKUtKTURoIyrtpEtCK8Gww\r\nNMuhIIlycsyugXb6isSWs2hBtpHW/Z/h0oEcm59CB791w19XkPTWsj6NxksTEUhC\r\nenVAuf9n8rjT3wT8EFBlsY0UYg31rHSBKu0LSJjqvucq6YSLg3Pma4d6jzrX5BWM\r\nyyBgbm2BBHAsHkW0ZAeDcDiW/OL+8nLC1utmq6/tQ3jc8+5Ge2v9lXC1UBUjr4H/\r\nmNV35knWbai2Oim7gBboZZPQ4avfa1iIQWqy/o6kh4ZtOrlLMs/qLiFGZcJ0EO6f\r\novvFwzbQQcrAqDJAkcKD9jggJKied47O2lKnEwIDAQABAoIBAGPs3e64AME8cdVm\r\nMGJPHLL9Zp00V8W+JPXz/jefF1Nd6yKzyLG+F9W/7X3kH/VNvu0LzGeElAc9bTtT\r\nvdmhlw2gHQWNRvO2K/X03BqtwAZYf0Ah72LMI+QI5PLMKAcbqRnylCYiJjVXpsJv\r\nY03LqIp8NlkObnDuI7E4A0edh+jIcdIb2oRxJJ6jnGN8aVHUDggS7BuGXlZOkDRL\r\nXWpR/7qxWCDLBly1z0UCjPAVSpoy4hyze5K/C1sFrqm4k99Ln8XmAZzupGB8XcBI\r\nK54L625sDOj947khxAhlfRgKlkTYmN17dJ05p3w+ssVa94uJP6dCn7Lr+sSQBjpT\r\nw1qTJkECgYEA/OoMkN5XY7g0sU9i9IdrQWsf49Y/ztGSLsm/Voo1CjaayiXqUsP+\r\nJVqU9s7eXMsOrUysYhS7n6dc4rFU2uS+IrxwN+G6Qjs4SoszuU9HlcxO5VUbpNfx\r\npbbEAo1r5/aBYzlfr2onXIwf64Os3theKF3T9GWbxzXdB6X47TyPWvMCgYEA3tYD\r\neI2dgnMTncrIhJErkdLH71cH67+zGv0UyvVx4i2690sA15dRvxUsAG17Nz619chu\r\nQYaFww63B7lFOLwVo+vv8n0MiTXNZj5ABWkpL4qIa8Dw+idVqxgeaXF/y1+Bqgsz\r\nHMt0dSTTe7lpW1TgrLyKKiO5EWeHhKg+JZU0S2ECgYBZsX9nWRLQ8KDvSOIlKmll\r\nN+KFYJQcesJHCZFr1XPd/WOD0VJ6q7tT7/3oUZEWg4Te/NQdrJClnCsa0hzvzDOK\r\nCh4aE1mE54+dECT10SHoBB7uwfId0d+HD3wQE6tzBj74u34trY3sCl2/nmEOXtl1\r\no2DpyacnTPjoH3paWCHW9QKBgB/zhdniTGRpBbYJXokLm7i0BXD/BKa7/P1wrmuP\r\nl/27WuScf4lqLBF/AqkpCZLZThPo4k5I8KMQWBQmb5N7/IpdiTE21vZRnZr8cAeW\r\nlY44iekRaDwmKbV3ptytpopNrnToWDLXxWIKnrxN0JqE6BY8jn8OUjn5o0fVK9wN\r\nscrhAoGABlE7nvsjFy3wOzkGA/gl+YvrwzVWe0aqnvkBqy+M/Lp/ZSKrbNVn2SeM\r\nTA/HDt6f3SlHILXJGEdWvwIKVzW9Ousjp/mLEauwTF6dtEKiz/48bhJjpVO/O4+5\r\nAdec85p//bP8aM10XtZeNBRYIniVqji5FxQTbAPYD+dzSK9Tvw8=\r\n-----END RSA PRIVATE KEY-----\r\n",
    "publicKey": "-----BEGIN CERTIFICATE-----\r\nMIIDHDCCAgSgAwIBAgIJZwtq/jVxA/oSMA0GCSqGSIb3DQEBCwUAMCoxKDAmBgNV\r\nBAMTH2NtLXAzNTMyMi1lNTU0MzAyLWludGVncmF0aW9uLTAwHhcNMjMwMzA3MDAz\r\nMzM0WhcNMjQwMzA2MDAzMzM0WjAqMSgwJgYDVQQDEx9jbS1wMzUzMjItZTU1NDMw\r\nMi1pbnRlZ3JhdGlvbi0wMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\r\n3CZl+fmtwWBjBKxXD8maJC4baAuKUtKTURoIyrtpEtCK8GwwNMuhIIlycsyugXb6\r\nisSWs2hBtpHW/Z/h0oEcm59CB791w19XkPTWsj6NxksTEUhCenVAuf9n8rjT3wT8\r\nEFBlsY0UYg31rHSBKu0LSJjqvucq6YSLg3Pma4d6jzrX5BWMyyBgbm2BBHAsHkW0\r\nZAeDcDiW/OL+8nLC1utmq6/tQ3jc8+5Ge2v9lXC1UBUjr4H/mNV35knWbai2Oim7\r\ngBboZZPQ4avfa1iIQWqy/o6kh4ZtOrlLMs/qLiFGZcJ0EO6fovvFwzbQQcrAqDJA\r\nkcKD9jggJKied47O2lKnEwIDAQABo0UwQzAMBgNVHRMEBTADAQH/MAsGA1UdDwQE\r\nAwIC9DAmBgNVHREEHzAdhhtodHRwOi8vZXhhbXBsZS5vcmcvd2ViaWQjbWUwDQYJ\r\nKoZIhvcNAQELBQADggEBANmdfikaYEvPYlLy1RJCQNK688swLV7RqY/vjHFJ942z\r\nyiWM1QV4GlXpBQymj8ZDSxQH9bj8LCWyEC8xi0vO3DcaxkXmwjvLZfoLpBO9tOqc\r\nLX9NfySdYK71g/S5Edpv33vt3fG3QPnsinok5E9wUsrLqeleOf8nXuWyYkVlGeVk\r\nyCgXfbsR2wcAMt+8DNfwrLnSExz5rY9Swolt84WcC/kUdONioEWac0354M+lTSOP\r\nVoTqaTYTUiUC6cCjghUV/O2pkxUQqW+DKFCX/a3JceT7wI1tcYmMFcdgkuHcGTYi\r\ne7cfC1bhbVIFkaHJs4yIsKIvlMWX6wIqbMMNst3xMxU=\r\n-----END CERTIFICATE-----\r\n",
    "certificateExpirationDate": "2024-03-06T00:33:34.000Z"
  },
  "statusCode": 200
}
```