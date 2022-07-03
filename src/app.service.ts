import { Injectable } from '@nestjs/common';
// import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class AppService {
  getHello(): string {
    // getAuth()
    //   .getUser('ttJDfcHZzCZmOArY34AFn5940kk2')
    //   .then((userRecord) => {
    //     // See the UserRecord reference doc for the contents of userRecord.
    //     console.log(userRecord);
    //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    //   })
    //   .catch((error) => {
    //     console.log('Error fetching user data:', error);
    //   });
    return 'Hello World!';
  }
}
