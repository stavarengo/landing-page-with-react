#!/bin/bash

#######################################################
# Messages functions
#######################################################
function _info {
    #echo -e "\e[96m[INFO]: $@\e[0m"
    echo -e "\e[96m[INFO]: ${@//$'\n'/\\n[INFO]: }\e[0m"
}
function _warn {
    #echo -e "\e[93m[WARN]: $@\e[0m"
    echo -e "\e[93m[WARN]: ${@//$'\n'/\\n[WARN]: }\e[0m"
}
function _err {
    #echo -e "\e[91m[ERR]: $@\e[0m"
    echo -e "\e[91m[ERR]: ${@//$'\n'/\\n[ERR]: }\e[0m"
}
function _success {
    #echo -e "\e[92m[SUCCESS]: $@\e[0m"
    echo -e "\e[92m[SUCCESS]: ${@//$'\n'/\\n[SUCCESS]: }\e[0m"
}


#######################################################
# Jobs asynchronous functions
#######################################################
function _waitAll()
{
    local ANY_FAIL=0
    for job in `jobs -p`
    do
        _info "Waitting $job..."
        wait $job || ANY_FAIL=1
        _info "Job done: $job"
    done

    return $ANY_FAIL
}


#######################################################
# Exit control functions
#######################################################
_EXITING=0
_LAST_CMD=
_LAST_LINENO=
_LAST_SOURCE=
function ___debug() {
    #echo "BASH_ARGC=$BASH_ARGC"
    #echo "BASH_ARGV=$BASH_ARGV"
    #echo "BASH_COMMAND=$BASH_COMMAND"
    #echo "BASH_EXECUTION_STRING=$BASH_EXECUTION_STRING"
    #echo "BASH_LINENO=$BASH_LINENO"
    #echo "BASH_REMATCH=$BASH_REMATCH"
    #echo "BASH_SOURCE=$BASH_SOURCE"
    #echo "BASH_SUBSHELL=$BASH_SUBSHELL"

    _LAST_CMD=$BASH_COMMAND
    _LAST_LINENO=$BASH_LINENO
    _LAST_SOURCE=$BASH_SOURCE

    if [ "$_EXITING" != "0" ]; then
        exit
    fi
}
if [ "$0" == "bash" ]; then
    trap ___debug DEBUG
fi

function __exiting {
    _info "Exiting..."
}

function _sigint {
    __exiting
    _EXITING=1
}
function _exit {
    if [ "$?" != "0" ]; then
        _err "Last command in '$_LAST_SOURCE' on line '$_LAST_LINENO'\n$_LAST_CMD"
        _showErrorMessageAndExit
    fi

    __exiting
    _EXITING=1
    
    for job in `jobs -p`
    do
        echo "   Sending SIGTERM to job $job..."
        kill -SIGTERM $job 2> /dev/null
    done
}

#######################################################
# Others helpers functions
#######################################################
function _showErrorMessageAndExit {
    local MSG=
    local SECONDS=7

    if [ "$#" == 1 ]; then
        if [[ "$1" =~ ^[0-9]+$ ]] ; then
            local SECONDS=$1
        else
            local MSG=$1
        fi
    elif [ "$#" == 2 ]; then
        local SECONDS=$1
        local MSG=$2
    fi

    if [ "$MSG" != "" ]; then
        _err "$MSG"
    fi

    _err "Exiting in $SECONDS seconds..."

    _dotSleep $SECONDS

    exit
}

function _dotSleep {
    trap _sigint SIGINT SIGTERM SIGQUIT
    trap _exit EXIT

    local SECONDS=$1

    for i in `seq 1 $SECONDS`; do
        echo -n "$i "
        sleep 1s
        if [ ! "$_EXITING" -eq "0" ]; then
            return
        fi
    done
    echo "Done"
}

