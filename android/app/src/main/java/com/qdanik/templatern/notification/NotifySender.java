package com.qdanik.templatern.notification;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import com.google.firebase.messaging.RemoteMessage;

import javax.annotation.Nullable;

public class NotifySender extends HeadlessJsTaskService {
  @Override
  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
    Bundle extras = intent.getExtras();
    if (extras != null) {
      RemoteMessage message = intent.getParcelableExtra("message");
      WritableMap messageMap = NotifySerializer.parseRemoteMessage(message);

      return new HeadlessJsTaskConfig( "NotifyReceiver", messageMap, 0, true );
    }
    return null;
  }
}
