/*
author: nsp-0111
*/
// #pragma GCC optimize("Ofast")
// #pragma GCC optimize ("unroll-loops")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,tune=native")
#include <bits/stdc++.h>

using namespace std;
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;
#ifndef ONLINE_JUDGE
#include </home/habilelabs/debug.h>
#else
#define out(x...)
#endif
#define IOS                           \
    ios_base::sync_with_stdio(false); \
    cin.tie(NULL);

#define uniq(v) v.resize(unique(all(v)) - v.begin())
#define ll long long
#define eps 1e-6
#define pi (3.141592653589)
#define ull uint64_t
#define prDouble(x) cout << fixed << setprecision(10) << x
#define rep(i, a, b) for (int i = a; i < b; i++)
#define fr(a, b) for (int i = a; i < b; ++i)
#define mem1(a) memset(a, -1, sizeof(a))
#define mem0(a) memset(a, 0, sizeof(a))
#define pb push_back

#define all(v) v.begin(), v.end()
#define vi vector<int>
#define mod 1000000007
#define fi first
#define se second
string yes = "YES", no = "NO";
template <class T>
using ordered_set = tree<T, null_type, less<T>,
                         rb_tree_tag, tree_order_statistics_node_update>;

#define int int64_t

void solve(int _t)
{

    int a, b;
    cin >> a >> b;
    pair<int, int> k, q;
    int x, y;
    cin >> x >> y;
    k = {x, y};
    cin >> x >> y;
    q = {x, y};

    map<pair<int, int>, int> mp;
    int dx[] = {-1, 0, 1, 0, -1};

    for (int jj = 0; jj < 4; jj++)
    {
        int i = dx[jj], j = dx[jj + 1];
        pair<int, int> cur = k;
        cur.first += a * i;
        cur.second += a * j;
        if (i == 0)
        {
            pair<int, int> op1 = cur;
            op1.first += b;
            // if (op1.first >= 0 and op1.second >= 0)
                mp[op1] = 1;
            pair<int, int> op2 = cur;
            // if (op2.first >= 0 and op2.second >= 0)
                op2.first -= b;
            mp[op2] = 1;
        }
        else
        {
            pair<int, int> op1 = cur;
            op1.second += b;
            // if (op1.first >= 0 and op1.second >= 0)
                mp[op1] = 1;
            pair<int, int> op2 = cur;
            op2.second -= b;
            // if (op2.first >= 0 and op2.second >= 0)
                mp[op2] = 1;
        }
    }
    int cnt = 0;
    for (int jj = 0; jj < 4; jj++)
    {
        int i = dx[jj], j = dx[jj + 1];
        pair<int, int> cur = q;
        cur.first += a * i;
        cur.second += a * j;
        if (i == 0)
        {
            pair<int, int> op1 = cur;
            op1.first += b;

            if (mp.count(op1))
            {
                cnt++;
                out(op1);
                mp.erase(op1);
            }
            pair<int, int> op2 = cur;
            op2.first -= b;
            if (mp.count(op2))
            {
                cnt++;
                mp.erase(op2);
                out(op2);
            }
        }
        else
        {
            pair<int, int> op1 = cur;
            op1.second += b;
            if (mp.count(op1))
            {
                cnt++;
                out(op1);
                mp.erase(op1);
            }
            pair<int, int> op2 = cur;
            op2.second -= b;
            if (mp.count(op2))
            {
                cnt++;
                out(op2);
                mp.erase(op2);
            }
        }
    }
    cout << cnt << endl;
}

signed main()

{
    IOS
        uint32_t test_case = 1;
    cin >> test_case;
    int __t = test_case;

    while (test_case--)
    {

        solve(__t - test_case);
    }
    return 0;
}