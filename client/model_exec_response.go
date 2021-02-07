/*
 * Netsoc webspaced
 *
 * API for managing next-gen webspaces. 
 *
 * API version: 1.1.2
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package webspaced
// ExecResponse struct for ExecResponse
type ExecResponse struct {
	// Process stdout
	Stdout string `json:"stdout"`
	// Process stderr
	Stderr string `json:"stderr"`
	// Process exit code
	ExitCode int32 `json:"exitCode"`
}