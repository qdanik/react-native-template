package com.qdanik.templatern.notification;

import android.content.Intent;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;

import com.facebook.react.HeadlessJsTaskService;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import io.invertase.firebase.Utils;

public class NotifyListener extends FirebaseMessagingService {
  private static final String TAG = "NotifyListener";

  @Override
  public void onMessageReceived(RemoteMessage message) {
    Log.d(TAG, "onMessageReceived event received");

    try {
      Intent headlessIntent = new Intent(this.getApplicationContext(), NotifySender.class);
      headlessIntent.putExtra("message", message);

      this.getApplicationContext().startService(headlessIntent);
      HeadlessJsTaskService.acquireWakeLockNow(this.getApplicationContext());
    } catch (IllegalStateException ex) {
      Log.e(TAG, "Background messages will only work if the message priority is set to 'high'", ex);
    }
  }
}
