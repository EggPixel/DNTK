﻿

namespace TestBF;


public static class RandomSafeUInt64
{
    public static ulong NextSafeUInt64(this Random rand) => (ulong)(rand.NextDouble() * ulong.MaxValue);
}

public class KeyBruteForcer
{

    public static MTKey? BruteForce(byte[] testBuffer, long senttime, ulong serverKey)
    {
        long recvTime = senttime;
        var keyPrefix = new byte[] { (byte)(testBuffer[0] ^ 0x45), (byte)(testBuffer[1] ^ 0x67) };
        // ending magic 
        // i'd do this but then i'd have to generate much more of the key, up to the entire goddamn key sometimes
        // var keySuffix = new byte[] { (byte)(testBuffer[^1] ^ 0x89), (byte)(testBuffer[^0] ^ 0xAB) };

        for (long count = 0; count < 3000; count++)
        {
            //this will alternate negative and positive per iteration
            long offset = count % 2 == 1 ? -1 * (count / 2) : count / 2;

            var rand = new Random((int)(recvTime + offset));
            var clientSeed = rand.NextSafeUInt64();



            var seed = serverKey ^ clientSeed;
            //yep i dont even know why i bothered
            var key = MTKey.PartialKey(seed, 8);
            // var key = new MTKey(seed);
            if (key[0] == keyPrefix[0] && key[1] == keyPrefix[1])
            {
                Console.WriteLine("Seed Found!  {0}", seed);
                return new MTKey(seed);
            }
        }
        Console.WriteLine($"Cannot find seed! @{testBuffer} : {senttime} : {serverKey}");
        return null;
    }
}

