<?php

use JetBrains\PhpStorm\ArrayShape;

if (!function_exists('jsonError')) {
    /**
     * Return error status and message to the front
     *
     * @param $msg
     * @return array
     */
    #[ArrayShape(['status' => "int", 'msg' => "string"])]
    function jsonError($msg): array
    {
        return [
            'status' => 0,
            'msg' => $msg
        ];
    }
}

if (!function_exists('jsonSuccess')) {
    /**
     * Return success status and message to the front
     *
     * @param $msg
     * @param bool|array $additional
     * @return array
     */
    #[ArrayShape(['status' => "int", 'msg' => "string"])]
    function jsonSuccess($msg, bool|array $additional): array
    {
        return $additional ? [
            'status' => 1,
            'msg' => $msg,
            ...$additional
        ] :
            [
                'status' => 1,
                'msg' => $msg
            ];
    }
}
