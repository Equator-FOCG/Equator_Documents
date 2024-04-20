import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./community.module.css";
import classnames from "classnames";
import Link from "@docusaurus/Link";

export function CommunitySection() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <div className="container">
      <div className="row margin-vert--lg">
        <div className="col text--center padding-vert--md">
          <div className="card">
            <div className="card__header">
              <i className={classnames(styles.icon, styles.discord)}></i>
            </div>
            <div className="card__body">
              <p>Join the Equator discord server</p>
            </div>
            <div className="card__footer">
              <Link
                to="https://discord.gg/CbZtq5S4sU"
                className="button button--outline button--primary button--block"
              >
                Join
              </Link>
            </div>
          </div>
        </div>

        <div className="col text--center padding-vert--md">
          <div className="card">
            <div className="card__header">
              <i className={classnames(styles.icon, styles.twitter)}></i>
            </div>
            <div className="card__body">
              <p>Receive our important messages</p>
            </div>
            <div className="card__footer">
              <Link
                to="https://twitter.com/EquatorFOCG"
                className="button button--outline button--primary button--block"
              >
                Follow &#64;EquatorFOCG
              </Link>
            </div>
          </div>
        </div>

        <div className="col text--center padding-vert--md">
          <div className="card">
            <div className="card__header">
              <i className={classnames(styles.icon, styles.email)}></i>
            </div>
            <div className="card__body">
              <p>Please related queries pop us an email</p>
            </div>
            <div className="card__footer">
              <CopyToClipboard
                text="theRunCom@protonmail.com"
                onCopy={handleCopy}
              >
                <Link
                  to=""
                  className="button button--outline button--primary button--block"
                >
                  {isCopied ? "Copied!" : "theRunCom@protonmail.com"}
                </Link>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
