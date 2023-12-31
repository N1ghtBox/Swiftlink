"use client";

import { useEffect, useState } from "react";
import { useCompletion } from "ai/react";
import type { Usage } from "tier";

import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/use-toast";

export function Generate({ user, featureLimits }: { user: any; featureLimits: Usage }) {
  const [error, setError] = useState(false);
  const [usedQuota, setUsedQuota] = useState(featureLimits.used);

  return (
    <>
      {/* Greetings */}
      <div className="mt-16 flex flex-col items-center gap-3 lg:flex-row lg:justify-between lg:gap-0">
        <h1 className="h4">
          Hello <span className="text-crimson-9">{user?.name ? user.name : ""}</span>
        </h1>
        {featureLimits.limit && usedQuota < featureLimits.limit ? (
          <p>{`${usedQuota}/${featureLimits.limit} copy remaining`}</p>
        ) : (
          <div className="flex items-center gap-3">
            <p>
              {featureLimits.limit}/{featureLimits.limit} free quota over. Extras charged per copy
            </p>
            <Button variant={"secondary"} href="/billing">
              Upgrade
            </Button>
          </div>
        )}
      </div>
      {/* Generate Section */}
      <div className="mb-12 mt-8 flex flex-col items-start gap-8 xl:mb-60 xl:flex-row xl:justify-between xl:gap-0">
        {/* Input field for prompt*/}
        <form className="flex w-full flex-col gap-8 xl:w-[473px]">
          <div className="flex flex-col">
            <div className="relative">
              <textarea
                rows={4}
                autoComplete="off"
                placeholder={`Explain your idea in 100 characters. Eg. Promote a luxury tailoring shop called "Spins" `}
                className="body w-full resize-none rounded-[4px] border border-slate-6 bg-slate-2 p-6  placeholder:text-slate-9"
              />
            </div>
            {/* Error Message */}
            {error && <p className="-mt-1 text-xs text-red-600">Character limit exceeded</p>}
          </div>
          <div className="flex flex-col gap-3">
            <Button
              variant="primary"
              type="submit"
              className="disabled:bg-slate-3 disabled:text-slate-11"
              // disabled={isLoading}
              // disabled={usedQuota < user?.limit.limit ? false : true}
            >
              {/* {isLoading ? "Generating your copy..." : "Generate marketing copy"} */}
            </Button>
          </div>
        </form>
        {/* Output field for marketing copy */}
        <div className="h-64 w-full rounded-[4px] border border-slate-6 bg-slate-2 p-10 xl:h-[384px] xl:w-[640px]">
          {/* {completion ? (
            <p className="body">{completion}</p>
          ) : (
            <h3 className="body-l-semibold text-slate-9">
              Your AI generated marketing copy will appear here!
            </h3>
          )} */}
        </div>
      </div>
    </>
  );
}
