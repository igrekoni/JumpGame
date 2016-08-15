package org.alfaseo.jkn;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.webkit.WebView;

public class Main extends AppCompatActivity {

    protected WebView web;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);


        web = (WebView) findViewById(R.id.webView);

        web.setInitialScale(1);
        web.getSettings().setUseWideViewPort(true);
        web.getSettings().setJavaScriptEnabled(true);
        web.getSettings().setLoadWithOverviewMode(true);
        web.getSettings().setAllowContentAccess(true);
        web.getSettings().setDomStorageEnabled(true);
        web.getSettings().setAllowFileAccessFromFileURLs(true);
        web.getSettings().setAllowUniversalAccessFromFileURLs(true);

        web.loadUrl("file:///android_asset/index.html");

    }
}
