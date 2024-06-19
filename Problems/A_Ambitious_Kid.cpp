#include<bits/stdc++.h>

using namespace std;

int main(){
    // int t;
    // cin>>t;
    // while(t--){
        int n;
        cin>>n;
        vector<int> v(n);
        int mn=INT_MAX;

        for(int i=0;i<n;i++){
           
           int x;cin>>x; mn=min(mn,abs(x));
        }
        cout<<mn<<endl;

    // }
    return 0;
}